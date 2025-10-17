// 大明编程挑战 - 用户数据存储
// 这个文件存储所有用户信息

const users = [
    {
        id: 1,
        username: "MingDynasty",
        password: "MgDycodeforces",
        email: "1@mingdynasty1.github.io",
        registerTime: "2024-01-01T00:00:00.000Z",
        solvedProblems: [1, 2, 3],
        submissions: [
            {
                problemId: 1,
                problemTitle: "数字连接问题",
                code: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\nbool compare(string a, string b) {\n    return a + b > b + a;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<string> nums(n);\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums.begin(), nums.end(), compare);\n    \n    string result = \"\";\n    for (string num : nums) {\n        result += num;\n    }\n    \n    cout << result << endl;\n    return 0;\n}",
                language: "cpp",
                submitTime: "2024-01-15T10:30:00.000Z",
                results: [
                    { testCase: 1, status: "AC", time: "15ms", memory: "256KB" },
                    { testCase: 2, status: "AC", time: "12ms", memory: "248KB" }
                ],
                passed: true
            }
        ]
    },
    {
        id: 2,
        username: "ming_user",
        password: "user123",
        email: "user@mingdynasty.com",
        registerTime: "2024-01-05T14:20:00.000Z",
        solvedProblems: [1],
        submissions: [
            {
                problemId: 1,
                problemTitle: "数字连接问题",
                code: "n = int(input())\nnums = input().split()\n\nnums.sort(key=lambda x: x*10, reverse=True)\nresult = ''.join(nums)\nprint(result)",
                language: "python",
                submitTime: "2024-01-10T09:15:00.000Z",
                results: [
                    { testCase: 1, status: "AC", time: "25ms", memory: "512KB" },
                    { testCase: 2, status: "WA", time: "22ms", memory: "508KB" }
                ],
                passed: false
            }
        ]
    }
];

// 导出用户数据（用于其他模块）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { users };
}
