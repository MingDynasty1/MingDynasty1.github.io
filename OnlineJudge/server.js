const express = require('express');
const multer  = require('multer');
const fs = require('fs');
const path = require('path');

const MAX_DISK_SIZE = 5 * 1024 * 1024 * 1024; // 5GB
const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

const app = express();
app.use(express.static(__dirname));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ 
  storage,
  limits: { fileSize: 1024 * 1024 * 1024 }, // 单文件最大1GB
  fileFilter: (req, file, cb) => cb(null, true)
});

function getDirSize(dir) {
  const files = fs.readdirSync(dir);
  let total = 0;
  files.forEach(file => {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isFile()) total += stat.size;
  });
  return total;
}

// 文件上传
app.post('/upload', upload.single('file'), (req, res) => {
  // 检查剩余空间
  const currSize = getDirSize(UPLOAD_DIR);
  if (currSize > MAX_DISK_SIZE) {
    fs.unlinkSync(req.file.path);
    return res.json({ message: '空间已满（5GB）！' });
  }
  res.json({ message: '上传成功！' });
});

// 获取文件列表
app.get('/files', (req, res) => {
  const files = fs.readdirSync(UPLOAD_DIR)
    .map(name => ({
      name,
      size: fs.statSync(path.join(UPLOAD_DIR, name)).size
    }));
  res.json(files);
});

// 文件下载
app.get('/download/:name', (req, res) => {
  const filename = req.params.name;
  const file = path.join(UPLOAD_DIR, filename);
  if (fs.existsSync(file)) res.download(file);
  else res.status(404).send('文件不存在');
});

// 文件删除
app.delete('/delete/:name', (req, res) => {
  const filename = req.params.name;
  const file = path.join(UPLOAD_DIR, filename);
  if (fs.existsSync(file)) fs.unlinkSync(file);
  res.json({ message: '已删除' });
});

// 启动服务
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`网盘服务已启动: http://localhost:${PORT}`);
});
