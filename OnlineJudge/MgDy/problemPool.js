const problemPoolByLevel = {
  1: [
    {
      name: "book",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 50, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sort",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 70, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "array",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 40, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 70, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "count",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 60, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  2: [
    {
      name: "duel",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sequence",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 55, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "tree",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 55, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "path",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 55, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "parse",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 0, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "certificate",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "line",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 0, trap: 2, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clock",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authenticate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bar",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "host",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bool",
      parts: [
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "queue",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 0, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "batch",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delete",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sentence",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "warning",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bridge",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 0, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sort",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 0, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "auto",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 32, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "route",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "allow",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "host",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "return",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "router",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "node",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "file",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "range",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "peer",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 45, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "translate",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 2, trap: 1, score: 56, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "public",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 0, trap: 0, score: 30, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "void",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authenticate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 0, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "image",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "animate",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "order",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "peer",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "texture",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scope",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "resize",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "animate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "handler",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scope",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "peer",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "float",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "trigger",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "menu",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 1, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "progress",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "field",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "auto",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "file",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 65, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "offset",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 80, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 1, trap: 1, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "diagram",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "test",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "if",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "router",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "deny",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "void",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 0, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "trigger",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "static",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 0, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "event",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "graph",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shade",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "log",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "alloc",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delay",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 2, trap: 0, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "button",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 1, score: 80, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "return",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "client",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "if",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 1, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "hash",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "char",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "check",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "const",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "port",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 28, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "string",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "proxy",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "input",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 1, trap: 0, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "having",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sentence",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 2, score: 36, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "modal",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "zoom",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authorize",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "protected",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 0, trap: 0, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "enum",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "level",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shell",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "translate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 1, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "zoom",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "new",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "check",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sign",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "deny",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "having",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "string",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "checkbox",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "checkbox",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "filter",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "query",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "duplicate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 85, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  3: [
    {
      name: "door",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "graph",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 30, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 60, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 3, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "dynamic",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 65, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "search",
      parts: [
        {
          dp: 1, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 60, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 2, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "search",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 2, trap: 0, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 3, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "void",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flag",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 2, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "group",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 0, trap: 1, score: 85, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "grid",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 0, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "hash",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "reference",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sentence",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "match",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "array",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decode",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "password",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 1, detail: 1, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "directory",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 4, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "result",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "boolean",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 0, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 4, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "float",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "enum",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 0, coding: 1, detail: 2, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clock",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 2, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 0, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "const",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "protected",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 1, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "style",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 0, coding: 1, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "trigger",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "string",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "title",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "order",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "proxy",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 3, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "certificate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "route",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delete",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 0, coding: 1, detail: 3, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 3, thinking: 0, coding: 1, detail: 3, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "auto",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "title",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 0, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 52, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "process",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "file",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "if",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 0, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "enum",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 0, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "router",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "picture",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 0, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 0, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "font",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "cluster",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "compare",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "port",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "file",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "job",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 1, adhoc: 1, thinking: 4, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "tree",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 52, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 3, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "number",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 2, thinking: 0, coding: 1, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transition",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 1, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "field",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "expand",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 0, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "having",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "audio",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shift",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transition",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 2, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "folder",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "equal",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 2, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 1, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "edge",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "letter",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "value",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 1, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "flip",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "const",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flag",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "hardware",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "config",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 0, score: 90, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "interval",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "test",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "parse",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 3, thinking: 0, coding: 1, detail: 3, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "panel",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 0, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "content",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 0, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "alloc",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 3, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "option",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "cache",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "free",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 2, score: 72, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 2, thinking: 4, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pool",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "option",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 4, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "queue",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "animate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "checkbox",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "grid",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bool",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "file",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 1, detail: 0, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "message",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 4, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "level",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "tone",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "interface",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "rotate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "new",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 2, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 0, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "state",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 0, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "text",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "calculate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 0, coding: 2, detail: 2, trap: 1, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 0, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "option",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "security",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 1, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "encrypt",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "phase",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delete",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 2, trap: 2, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "request",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "progress",
      parts: [
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 2, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  4: [
    {
      name: "detect",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 1, trap: 0, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 3, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "catfood",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 0, score: 35, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "lucky",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 60, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 100, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "network",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 50, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 3, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "segment",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 60, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "optimize",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 65, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 2, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "cookie",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 5, trap: 2, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "rotate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 1, detail: 2, trap: 0, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "checkbox",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 3, detail: 1, trap: 1, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 5, coding: 3, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "proxy",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 2, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 4, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "button",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 4, coding: 1, detail: 2, trap: 1, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 4, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "resize",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 5, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 4, trap: 2, score: 75, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 4, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "select",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 5, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 1, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 5, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "gradient",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 2, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "input",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "batch",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 3, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 3, detail: 2, trap: 1, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 4, coding: 3, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "float",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 3, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "field",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 1, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 5, coding: 2, detail: 1, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "long",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 2, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 1, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 1, score: 60, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 1, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 1, score: 75, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 1, adhoc: 3, thinking: 4, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "pattern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 2, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "deserialize",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 1, trap: 0, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 1, trap: 0, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "worker",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 44, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "increment",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delay",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 1, trap: 1, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 1, trap: 1, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "alloc",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 3, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 2, thinking: 0, coding: 2, detail: 3, trap: 1, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 3, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "thread",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 1, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "protocol",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 4, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 1, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 4, adhoc: 2, thinking: 4, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "malloc",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 1, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "when",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 5, coding: 1, detail: 1, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 3, combinatorics: 0, adhoc: 1, thinking: 5, coding: 1, detail: 1, trap: 0, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 4, combinatorics: 0, adhoc: 2, thinking: 5, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "path",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 1, trap: 2, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 1, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "check",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 3, trap: 3, score: 75, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "limit",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 3, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 0, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 4, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "debug",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 1, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 3, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "extract",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 0, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "array",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 0, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 0, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 4, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "serialize",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 1, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 0, thinking: 5, coding: 3, detail: 1, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 3, trap: 3, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 3, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 2, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 0, score: 52, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 2, combinatorics: 1, adhoc: 2, thinking: 4, coding: 3, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "checkbox",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "interface",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 4, trap: 1, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 4, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 5, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "delete",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 5, combinatorics: 0, adhoc: 1, thinking: 5, coding: 1, detail: 1, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 5, combinatorics: 0, adhoc: 2, thinking: 5, coding: 1, detail: 1, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decode",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 1, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 1, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 1, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 2, detail: 1, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "channel",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 3, trap: 0, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shade",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 1, thinking: 0, coding: 1, detail: 4, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 2, thinking: 0, coding: 1, detail: 4, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 3, thinking: 1, coding: 1, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "insert",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 3, coding: 1, detail: 1, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 1, adhoc: 1, thinking: 4, coding: 3, detail: 1, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 1, adhoc: 1, thinking: 5, coding: 3, detail: 1, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "input",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 0, thinking: 2, coding: 3, detail: 2, trap: 1, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 5, adhoc: 0, thinking: 2, coding: 3, detail: 4, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "group",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 4, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "link",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 3, trap: 1, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "animate",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 1, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "volatile",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 3, trap: 1, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 2, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 2, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delay",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 3, trap: 3, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 3, trap: 3, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 1, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "folder",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 3, adhoc: 1, thinking: 1, coding: 1, detail: 4, trap: 1, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 3, adhoc: 1, thinking: 1, coding: 1, detail: 5, trap: 1, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 3, adhoc: 1, thinking: 1, coding: 2, detail: 5, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "point",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 1, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "static",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 1, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 1, thinking: 2, coding: 2, detail: 4, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "resize",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 2, detail: 0, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "layout",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 0, score: 28, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 4, trap: 1, score: 40, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 1, detail: 5, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "pattern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "color",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "layout",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 1, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 1, thinking: 5, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "label",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 4, coding: 3, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "path",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 5, coding: 2, detail: 1, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 5, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "link",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 2, thinking: 1, coding: 1, detail: 4, trap: 0, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 1, detail: 4, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "state",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 1, score: 36, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 1, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "cluster",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 0, coding: 1, detail: 3, trap: 1, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 1, coding: 1, detail: 5, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "copy",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 4, adhoc: 1, thinking: 3, coding: 3, detail: 1, trap: 1, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 4, adhoc: 1, thinking: 4, coding: 3, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decode",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 1, detail: 0, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 1, adhoc: 4, thinking: 5, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "job",
      parts: [
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 3, trap: 1, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 3, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shrink",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 1, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "rotate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "slide",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 0, score: 75, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 5, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "expand",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 2, trap: 1, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "text",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 3, detail: 1, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 3, detail: 1, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 3, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "exception",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 3, coding: 1, detail: 1, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 0, thinking: 3, coding: 3, detail: 2, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 0, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "join",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 0, score: 85, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 5, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "private",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "new",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 2, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 3, thinking: 4, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "serialize",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 2, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 3, trap: 0, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 3, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 3, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 2, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "phase",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 0, coding: 1, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 0, coding: 1, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 2, coding: 1, detail: 2, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 3, adhoc: 4, thinking: 2, coding: 1, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "font",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 4, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "zoom",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 1, detail: 1, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 5, coding: 1, detail: 1, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 5, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "process",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 3, coding: 2, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 4, coding: 2, detail: 1, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 2, detail: 1, trap: 2, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "port",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 3, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 3, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 1, trap: 1, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 3, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "order",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 2, detail: 0, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 0, thinking: 5, coding: 2, detail: 1, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "multiply",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 4, trap: 2, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "record",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 5, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "interface",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 0, trap: 0, score: 30, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 5, coding: 1, detail: 0, trap: 2, score: 75, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 2, adhoc: 4, thinking: 5, coding: 1, detail: 1, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "hash",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "state",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 0, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 3, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "const",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 3, detail: 3, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "group",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 3, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 4, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 1, coding: 3, detail: 4, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 1, coding: 3, detail: 5, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "field",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "mode",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "console",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 0, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "checkbox",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 0, coding: 1, detail: 2, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 0, coding: 1, detail: 4, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 0, coding: 1, detail: 4, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 1, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "int",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 1, trap: 0, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 2, trap: 1, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 5, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 2, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 5, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flag",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 2, combinatorics: 0, adhoc: 4, thinking: 1, coding: 1, detail: 5, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 2, combinatorics: 0, adhoc: 4, thinking: 1, coding: 1, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bool",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 1, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flag",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 3, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 2, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 2, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 4, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "proxy",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 4, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  5: [
    {
      name: "color",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 3, trap: 0, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 0, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 5, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "edit",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 4, trap: 1, score: 40, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 3, trap: 0, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 2, detail: 6, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "move",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 2, detail: 5, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 3, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flow",
      parts: [
        {
          dp: 2, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 4, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 45, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 6, combinatorics: 2, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "tree",
      parts: [
        {
          dp: 3, ds: 2, string: 0, graph: 2, combinatorics: 1, adhoc: 1, thinking: 3, coding: 2, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 0, graph: 3, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 75, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 4, string: 0, graph: 4, combinatorics: 4, adhoc: 2, thinking: 5, coding: 3, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "game",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 2, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 2, trap: 1, score: 55, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 2, string: 0, graph: 2, combinatorics: 4, adhoc: 3, thinking: 4, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "mark",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 4, trap: 2, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 5, combinatorics: 0, adhoc: 4, thinking: 3, coding: 2, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "encode",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 1, graph: 2, combinatorics: 0, adhoc: 4, thinking: 2, coding: 1, detail: 6, trap: 3, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 5, string: 1, graph: 2, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "title",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 6, coding: 3, detail: 1, trap: 1, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 1, combinatorics: 0, adhoc: 5, thinking: 6, coding: 3, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "gateway",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 3, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 5, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 3, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 4, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 4, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 2, graph: 4, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "greater",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 3, adhoc: 2, thinking: 2, coding: 2, detail: 5, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 3, adhoc: 3, thinking: 2, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "worker",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 1, coding: 3, detail: 0, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 1, thinking: 2, coding: 4, detail: 1, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 4, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "log",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 4, detail: 1, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 4, detail: 2, trap: 2, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 2, string: 4, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 4, detail: 3, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "node",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 2, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 2, detail: 3, trap: 2, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 2, thinking: 3, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "unsigned",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 5, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shrink",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 5, trap: 1, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "value",
      parts: [
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 4, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "memory",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 0, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 3, trap: 1, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transform",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 3, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 4, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 5, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 5, thinking: 2, coding: 3, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clock",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 3, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 4, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 4, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "translate",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 4, coding: 1, detail: 1, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 6, coding: 2, detail: 2, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "test",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 3, detail: 1, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 3, detail: 4, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "callback",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 0, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 1, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "image",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 5, thinking: 5, coding: 3, detail: 2, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 5, thinking: 6, coding: 4, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "query",
      parts: [
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 2, detail: 1, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 3, detail: 2, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 2, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "greater",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 5, trap: 2, score: 36, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 6, trap: 2, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "record",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 1, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 2, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 2, adhoc: 3, thinking: 5, coding: 3, detail: 2, trap: 3, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 2, adhoc: 4, thinking: 6, coding: 3, detail: 2, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "label",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 1, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 2, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pattern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 1, trap: 2, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 5, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 6, coding: 3, detail: 2, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "image",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 5, thinking: 5, coding: 4, detail: 3, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 5, thinking: 5, coding: 4, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "argument",
      parts: [
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 3, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 3, detail: 1, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 6, coding: 4, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 5, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "peer",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 2, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 3, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 4, adhoc: 3, thinking: 4, coding: 2, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "boolean",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 2, detail: 5, trap: 2, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 1, coding: 2, detail: 5, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 5, thinking: 2, coding: 2, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 4, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 2, coding: 4, detail: 6, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "shadow",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 3, adhoc: 2, thinking: 2, coding: 1, detail: 4, trap: 1, score: 56, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 3, score: 60, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 4, graph: 0, combinatorics: 5, adhoc: 3, thinking: 3, coding: 2, detail: 5, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "tree",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 5, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 3, coding: 2, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "curve",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 3, coding: 2, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 3, adhoc: 0, thinking: 4, coding: 3, detail: 2, trap: 1, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 2, graph: 0, combinatorics: 3, adhoc: 0, thinking: 4, coding: 4, detail: 3, trap: 1, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 2, graph: 0, combinatorics: 3, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "range",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 1, thinking: 4, coding: 4, detail: 3, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bar",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 4, coding: 3, detail: 3, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 5, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sentence",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 2, detail: 1, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 6, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "permit",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 3, detail: 5, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 4, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "encode",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 1, trap: 4, score: 65, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 2, trap: 4, score: 80, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bar",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "decode",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 2, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 3, detail: 5, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 3, detail: 2, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 2, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 4, trap: 4, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 2, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "order",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 4, trap: 2, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "phase",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 1, detail: 2, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 2, detail: 2, trap: 3, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "level",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 3, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 1, adhoc: 4, thinking: 2, coding: 2, detail: 3, trap: 3, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 4, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 2, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "less",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 4, detail: 2, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 1, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 1, detail: 0, trap: 3, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 6, coding: 2, detail: 2, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "else",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 3, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "validate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 5, coding: 3, detail: 1, trap: 2, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 6, coding: 4, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "rotate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 1, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 6, coding: 4, detail: 2, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "join",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 0, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 3, coding: 2, detail: 1, trap: 2, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 4, thinking: 5, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "queue",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 3, detail: 3, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 4, detail: 4, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 4, detail: 5, trap: 3, score: 64, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 4, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "service",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 6, coding: 3, detail: 2, trap: 1, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 6, coding: 3, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "icon",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 3, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "parse",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 4, trap: 1, score: 48, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 4, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clone",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 0, coding: 3, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 5, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 5, thinking: 2, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "alert",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 2, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "combine",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 2, thinking: 0, coding: 2, detail: 4, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 4, thinking: 3, coding: 3, detail: 5, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 5, thinking: 3, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "error",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 0, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 2, trap: 2, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 5, thinking: 5, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "list",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 3, trap: 3, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "validate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 5, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 6, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "schedule",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 5, thinking: 3, coding: 3, detail: 5, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 5, thinking: 3, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "picture",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 2, detail: 1, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 2, detail: 2, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "callback",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 2, adhoc: 4, thinking: 3, coding: 4, detail: 3, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 2, adhoc: 5, thinking: 5, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "translate",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 3, trap: 3, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 2, coding: 2, detail: 4, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 2, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "input",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 1, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "video",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 2, trap: 2, score: 72, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 1, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "char",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 3, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 3, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 2, score: 45, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 3, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 4, trap: 2, score: 80, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 5, combinatorics: 1, adhoc: 3, thinking: 3, coding: 2, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "add",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 5, thinking: 5, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "media",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 3, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 3, score: 75, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 5, graph: 0, combinatorics: 4, adhoc: 4, thinking: 6, coding: 2, detail: 2, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "multiply",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 0, coding: 3, detail: 3, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 2, coding: 3, detail: 3, trap: 1, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 4, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "array",
      parts: [
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 2, trap: 4, score: 52, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 2, detail: 2, trap: 4, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 3, detail: 2, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 25, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 3, trap: 1, score: 40, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 2, coding: 4, detail: 5, trap: 2, score: 75, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 2, coding: 4, detail: 6, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "pipe",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 3, detail: 2, trap: 2, score: 28, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 4, detail: 4, trap: 2, score: 60, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "when",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 1, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 3, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 2, combinatorics: 0, adhoc: 1, thinking: 3, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "query",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 3, detail: 4, trap: 3, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 5, thinking: 3, coding: 4, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "mode",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 4, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 5, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "client",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "parameter",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 4, trap: 4, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "gradient",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 1, thinking: 1, coding: 3, detail: 5, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 2, thinking: 1, coding: 3, detail: 6, trap: 2, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 2, thinking: 2, coding: 3, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "paragraph",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 2, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 3, trap: 4, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 5, thinking: 2, coding: 3, detail: 4, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 0, adhoc: 5, thinking: 2, coding: 3, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pool",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 2, combinatorics: 0, adhoc: 5, thinking: 3, coding: 2, detail: 1, trap: 2, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 2, combinatorics: 0, adhoc: 5, thinking: 4, coding: 2, detail: 4, trap: 2, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "router",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 1, adhoc: 3, thinking: 5, coding: 3, detail: 2, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 1, adhoc: 5, thinking: 6, coding: 3, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "test",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 2, thinking: 5, coding: 4, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 3, thinking: 6, coding: 4, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "resize",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 3, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 4, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 0, adhoc: 5, thinking: 2, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "channel",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 2, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 4, detail: 2, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 3, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "diagram",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 3, trap: 1, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 5, trap: 2, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "word",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 2, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 3, trap: 4, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "timer",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 1, trap: 0, score: 25, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 4, detail: 5, trap: 1, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 4, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "radio",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 1, coding: 1, detail: 3, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 5, thinking: 1, coding: 2, detail: 4, trap: 1, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 5, thinking: 2, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "path",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 3, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 3, coding: 2, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authenticate",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 0, trap: 3, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 4, trap: 3, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 5, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 3, coding: 4, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "alert",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 3, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "limit",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 2, thinking: 4, coding: 3, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 3, thinking: 6, coding: 3, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "path",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 2, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 4, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "modal",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 3, coding: 2, detail: 1, trap: 2, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 3, coding: 2, detail: 1, trap: 3, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 6, coding: 4, detail: 1, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 6, coding: 4, detail: 2, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "allow",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 3, adhoc: 2, thinking: 1, coding: 2, detail: 4, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 5, adhoc: 2, thinking: 3, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flag",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 2, score: 30, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 4, trap: 2, score: 85, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 5, thinking: 2, coding: 3, detail: 6, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 2, thinking: 4, coding: 4, detail: 2, trap: 1, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "verify",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 4, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 4, combinatorics: 0, adhoc: 1, thinking: 5, coding: 1, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 4, combinatorics: 0, adhoc: 1, thinking: 6, coding: 1, detail: 1, trap: 1, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 4, combinatorics: 0, adhoc: 2, thinking: 6, coding: 3, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  6: [
    {
      name: "traverse",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 24, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 40, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 3, combinatorics: 6, adhoc: 3, thinking: 5, coding: 3, detail: 5, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "query",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 0, score: 52, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 5, trap: 0, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 5, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "soldier",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 7, coding: 2, detail: 5, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 7, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "matching",
      parts: [
        {
          dp: 2, ds: 2, string: 0, graph: 3, combinatorics: 2, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 4, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 3, trap: 1, score: 30, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 3, string: 0, graph: 5, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 5, trap: 2, score: 65, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 6, ds: 6, string: 0, graph: 5, combinatorics: 6, adhoc: 2, thinking: 5, coding: 2, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "verify",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 3, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 3, adhoc: 2, thinking: 3, coding: 2, detail: 1, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 2, thinking: 6, coding: 3, detail: 4, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 4, combinatorics: 4, adhoc: 3, thinking: 6, coding: 3, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "callback",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 6, thinking: 7, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "range",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 4, adhoc: 1, thinking: 3, coding: 5, detail: 3, trap: 4, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 4, adhoc: 1, thinking: 4, coding: 5, detail: 5, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 4, adhoc: 1, thinking: 5, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flip",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 3, detail: 2, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 4, detail: 5, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "offset",
      parts: [
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 3, trap: 2, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 4, trap: 2, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 5, trap: 2, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clone",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 1, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 2, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 5, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 5, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "malloc",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 3, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 3, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 5, trap: 0, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 4, combinatorics: 1, adhoc: 1, thinking: 4, coding: 2, detail: 5, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 5, combinatorics: 4, adhoc: 2, thinking: 4, coding: 3, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "verify",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 5, coding: 4, detail: 3, trap: 2, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 6, thinking: 6, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "compare",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 2, adhoc: 2, thinking: 5, coding: 4, detail: 1, trap: 2, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 2, adhoc: 3, thinking: 5, coding: 5, detail: 2, trap: 3, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 4, combinatorics: 2, adhoc: 3, thinking: 6, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "system",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 4, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "state",
      parts: [
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 4, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 3, detail: 3, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 4, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 4, detail: 4, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 5, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 5, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "permit",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 1, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "equal",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 3, trap: 1, score: 16, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 2, detail: 4, trap: 2, score: 28, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 5, trap: 2, score: 52, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 3, detail: 6, trap: 2, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 3, detail: 6, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "scale",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 1, coding: 3, detail: 3, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 3, coding: 3, detail: 3, trap: 2, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 4, thinking: 5, coding: 5, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "decode",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 1, combinatorics: 0, adhoc: 5, thinking: 4, coding: 5, detail: 4, trap: 1, score: 85, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 1, graph: 1, combinatorics: 0, adhoc: 6, thinking: 5, coding: 5, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "unsigned",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 1, thinking: 5, coding: 4, detail: 3, trap: 3, score: 90, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 6, graph: 0, combinatorics: 4, adhoc: 2, thinking: 6, coding: 4, detail: 4, trap: 3, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "trigger",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 6, coding: 2, detail: 4, trap: 3, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 2, thinking: 6, coding: 3, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "gateway",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 3, trap: 0, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 1, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 4, trap: 2, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 3, thinking: 6, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "combine",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 2, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 5, thinking: 3, coding: 2, detail: 3, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 3, adhoc: 6, thinking: 4, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "record",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 3, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 5, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 2, trap: 1, score: 60, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 2, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "route",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 2, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 3, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 5, combinatorics: 1, adhoc: 4, thinking: 5, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "dark",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 2, adhoc: 3, thinking: 4, coding: 4, detail: 3, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 2, adhoc: 4, thinking: 5, coding: 4, detail: 5, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 2, adhoc: 5, thinking: 5, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 6, coding: 3, detail: 2, trap: 2, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 7, coding: 5, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "string",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 6, coding: 4, detail: 3, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 2, thinking: 7, coding: 5, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "graphic",
      parts: [
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 2, combinatorics: 0, adhoc: 0, thinking: 4, coding: 3, detail: 3, trap: 1, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 4, graph: 2, combinatorics: 0, adhoc: 0, thinking: 5, coding: 4, detail: 4, trap: 3, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 5, graph: 2, combinatorics: 0, adhoc: 1, thinking: 6, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "input",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 4, detail: 7, trap: 4, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 5, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "calculate",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 4, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 6, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 4, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "tree",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 3, detail: 2, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 3, detail: 4, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 3, adhoc: 4, thinking: 5, coding: 5, detail: 5, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 3, adhoc: 5, thinking: 5, coding: 5, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pipe",
      parts: [
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 2, detail: 4, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 3, graph: 0, combinatorics: 2, adhoc: 4, thinking: 4, coding: 3, detail: 6, trap: 2, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 6, thinking: 4, coding: 4, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "float",
      parts: [
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 4, detail: 3, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 4, detail: 3, trap: 4, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 4, graph: 1, combinatorics: 0, adhoc: 2, thinking: 5, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "verify",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 2, thinking: 1, coding: 1, detail: 3, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 4, thinking: 3, coding: 2, detail: 6, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 4, thinking: 4, coding: 3, detail: 6, trap: 2, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 4, combinatorics: 3, adhoc: 5, thinking: 4, coding: 3, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transform",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 1, coding: 1, detail: 3, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 3, adhoc: 2, thinking: 2, coding: 2, detail: 3, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 5, adhoc: 3, thinking: 3, coding: 5, detail: 7, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "copy",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 5, trap: 2, score: 52, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 6, trap: 3, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "hub",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 5, detail: 5, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 5, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "graph",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 3, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 2, detail: 5, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 5, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "short",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 0, thinking: 1, coding: 3, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 0, thinking: 2, coding: 4, detail: 2, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 0, thinking: 5, coding: 5, detail: 3, trap: 1, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 8, adhoc: 0, thinking: 5, coding: 5, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "abstract",
      parts: [
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 25, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 4, detail: 2, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 4, detail: 3, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 5, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flag",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 4, combinatorics: 3, adhoc: 3, thinking: 6, coding: 3, detail: 4, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 5, combinatorics: 3, adhoc: 5, thinking: 6, coding: 3, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "continue",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 3, detail: 4, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 4, detail: 5, trap: 4, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 5, thinking: 5, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "validate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 4, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 5, trap: 3, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 6, thinking: 5, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 4, combinatorics: 0, adhoc: 5, thinking: 3, coding: 3, detail: 6, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 2, graph: 4, combinatorics: 0, adhoc: 6, thinking: 4, coding: 3, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "offset",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 3, coding: 3, detail: 3, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 0, graph: 1, combinatorics: 3, adhoc: 0, thinking: 6, coding: 4, detail: 4, trap: 2, score: 80, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 0, graph: 1, combinatorics: 4, adhoc: 1, thinking: 6, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "interval",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 2, detail: 2, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "message",
      parts: [
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 5, thinking: 3, coding: 3, detail: 5, trap: 1, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 6, thinking: 4, coding: 3, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "test",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 2, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 2, thinking: 4, coding: 3, detail: 2, trap: 2, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 3, thinking: 5, coding: 4, detail: 3, trap: 3, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 6, adhoc: 3, thinking: 5, coding: 4, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "struct",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 3, adhoc: 0, thinking: 1, coding: 2, detail: 4, trap: 4, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 0, graph: 2, combinatorics: 4, adhoc: 0, thinking: 1, coding: 5, detail: 6, trap: 4, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 0, graph: 2, combinatorics: 6, adhoc: 0, thinking: 3, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "photo",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 2, thinking: 6, coding: 2, detail: 3, trap: 2, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 3, thinking: 6, coding: 2, detail: 4, trap: 2, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 6, combinatorics: 3, adhoc: 3, thinking: 6, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "slide",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 3, detail: 1, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 2, trap: 2, score: 56, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 6, thinking: 6, coding: 5, detail: 4, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "deserialize",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 3, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 2, coding: 3, detail: 5, trap: 3, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 2, combinatorics: 5, adhoc: 2, thinking: 3, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "hash",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 0, coding: 3, detail: 3, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 3, coding: 5, detail: 5, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 5, thinking: 4, coding: 5, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "word",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 4, trap: 1, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 5, coding: 5, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "public",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 7, adhoc: 2, thinking: 6, coding: 3, detail: 4, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 8, adhoc: 2, thinking: 6, coding: 3, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "free",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 2, adhoc: 3, thinking: 4, coding: 3, detail: 5, trap: 3, score: 64, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 0, combinatorics: 2, adhoc: 3, thinking: 5, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "trigger",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 4, thinking: 4, coding: 2, detail: 2, trap: 1, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 4, thinking: 7, coding: 5, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "combine",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 4, detail: 4, trap: 2, score: 36, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 6, trap: 3, score: 72, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "block",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 3, adhoc: 3, thinking: 4, coding: 5, detail: 3, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 3, adhoc: 3, thinking: 5, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "catch",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 3, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 4, coding: 3, detail: 3, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 6, thinking: 6, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 4, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 5, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "picture",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 0, adhoc: 4, thinking: 3, coding: 2, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 1, adhoc: 4, thinking: 3, coding: 2, detail: 4, trap: 3, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 2, adhoc: 5, thinking: 3, coding: 2, detail: 7, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 4, adhoc: 5, thinking: 3, coding: 3, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "range",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 3, combinatorics: 0, adhoc: 2, thinking: 3, coding: 4, detail: 6, trap: 2, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 3, combinatorics: 0, adhoc: 2, thinking: 3, coding: 5, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "increment",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 1, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 3, adhoc: 6, thinking: 5, coding: 2, detail: 3, trap: 2, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 6, thinking: 6, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "hash",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 6, thinking: 5, coding: 2, detail: 1, trap: 1, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 4, combinatorics: 2, adhoc: 6, thinking: 6, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clone",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 3, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 5, thinking: 6, coding: 4, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "setting",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 3, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 4, detail: 3, trap: 4, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 3, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 4, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "permit",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 1, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 2, trap: 2, score: 28, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 6, graph: 1, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 3, trap: 3, score: 44, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 7, graph: 2, combinatorics: 0, adhoc: 1, thinking: 5, coding: 3, detail: 4, trap: 3, score: 72, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 7, graph: 3, combinatorics: 0, adhoc: 2, thinking: 6, coding: 4, detail: 4, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "index",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 16, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 4, thinking: 6, coding: 2, detail: 3, trap: 3, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 1, combinatorics: 0, adhoc: 5, thinking: 6, coding: 3, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "grid",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 2, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 6, coding: 4, detail: 2, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 4, thinking: 6, coding: 5, detail: 3, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 5, thinking: 6, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "less",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 3, detail: 4, trap: 1, score: 24, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 3, adhoc: 5, thinking: 4, coding: 5, detail: 6, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "while",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 4, detail: 3, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 4, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 5, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "animate",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 4, combinatorics: 3, adhoc: 2, thinking: 2, coding: 2, detail: 5, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 4, combinatorics: 3, adhoc: 3, thinking: 2, coding: 3, detail: 6, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 4, combinatorics: 3, adhoc: 3, thinking: 3, coding: 4, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "kernel",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 6, trap: 2, score: 68, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 7, trap: 3, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "group",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 5, coding: 2, detail: 2, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 6, coding: 3, detail: 2, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 7, coding: 4, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "form",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 2, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 3, detail: 5, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 4, thinking: 0, coding: 3, detail: 6, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 5, thinking: 3, coding: 3, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "error",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 3, coding: 1, detail: 2, trap: 1, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 6, coding: 2, detail: 3, trap: 3, score: 70, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 4, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 6, coding: 4, detail: 3, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 4, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 7, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "join",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 4, detail: 4, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "auto",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 3, thinking: 3, coding: 3, detail: 1, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 6, thinking: 5, coding: 3, detail: 3, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 6, thinking: 7, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "system",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 2, thinking: 5, coding: 2, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 1, adhoc: 4, thinking: 5, coding: 4, detail: 1, trap: 2, score: 52, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 2, combinatorics: 2, adhoc: 5, thinking: 7, coding: 4, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "effect",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 2, adhoc: 0, thinking: 3, coding: 2, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 4, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 2, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 5, graph: 2, combinatorics: 5, adhoc: 1, thinking: 3, coding: 4, detail: 4, trap: 2, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 5, graph: 2, combinatorics: 6, adhoc: 2, thinking: 5, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "search",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 2, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 4, trap: 3, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 5, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "string",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 4, trap: 2, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "interface",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 1, thinking: 1, coding: 3, detail: 1, trap: 0, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 3, thinking: 4, coding: 4, detail: 2, trap: 1, score: 52, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 5, thinking: 5, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "paragraph",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 3, detail: 1, trap: 0, score: 25, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 3, trap: 2, score: 30, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 5, trap: 2, score: 55, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 5, detail: 6, trap: 3, score: 85, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 5, thinking: 3, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "column",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 3, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 2, detail: 4, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 4, graph: 0, combinatorics: 3, adhoc: 1, thinking: 2, coding: 2, detail: 4, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 4, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 4, detail: 7, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "proxy",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 5, coding: 3, detail: 2, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 5, combinatorics: 0, adhoc: 2, thinking: 6, coding: 4, detail: 3, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 6, combinatorics: 0, adhoc: 3, thinking: 6, coding: 4, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "map",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 3, detail: 1, trap: 1, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 5, coding: 3, detail: 2, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 7, coding: 3, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transform",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 1, thinking: 4, coding: 1, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 2, adhoc: 1, thinking: 4, coding: 1, detail: 3, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 3, adhoc: 5, thinking: 6, coding: 3, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "edge",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 0, thinking: 1, coding: 3, detail: 1, trap: 2, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 4, combinatorics: 2, adhoc: 0, thinking: 3, coding: 3, detail: 2, trap: 2, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 5, combinatorics: 5, adhoc: 3, thinking: 5, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "group",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 5, coding: 4, detail: 3, trap: 2, score: 80, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 6, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "mode",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 6, coding: 4, detail: 3, trap: 4, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 5, thinking: 7, coding: 4, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "final",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 1, coding: 3, detail: 2, trap: 2, score: 36, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 6, thinking: 4, coding: 3, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scroll",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 4, combinatorics: 0, adhoc: 3, thinking: 5, coding: 1, detail: 2, trap: 4, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 4, combinatorics: 0, adhoc: 6, thinking: 7, coding: 3, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "message",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 1, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 8, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 2, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 8, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 7, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scope",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 2, thinking: 0, coding: 1, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 5, combinatorics: 3, adhoc: 3, thinking: 4, coding: 3, detail: 6, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 5, combinatorics: 3, adhoc: 4, thinking: 4, coding: 4, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "break",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 3, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 1, graph: 0, combinatorics: 6, adhoc: 0, thinking: 4, coding: 5, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "new",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 3, adhoc: 5, thinking: 3, coding: 2, detail: 5, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 3, adhoc: 6, thinking: 3, coding: 4, detail: 7, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "router",
      parts: [
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 3, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 3, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "client",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 2, detail: 2, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 6, coding: 4, detail: 2, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 4, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "view",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 1, thinking: 3, coding: 2, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 1, thinking: 3, coding: 4, detail: 4, trap: 2, score: 44, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 4, adhoc: 1, thinking: 6, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    }
  ],
  7: [
    {
      name: "menu",
      parts: [
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 4, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 4, detail: 3, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 4, detail: 5, trap: 4, score: 36, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 6, graph: 0, combinatorics: 1, adhoc: 2, thinking: 4, coding: 4, detail: 5, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 7, graph: 0, combinatorics: 1, adhoc: 2, thinking: 6, coding: 5, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "index",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 5, coding: 2, detail: 4, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 5, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 2, combinatorics: 0, adhoc: 6, thinking: 6, coding: 5, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "batch",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 25, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 4, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 5, detail: 5, trap: 3, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 3, coding: 5, detail: 6, trap: 3, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 4, coding: 5, detail: 8, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 4, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 5, combinatorics: 0, adhoc: 2, thinking: 6, coding: 4, detail: 3, trap: 3, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 6, combinatorics: 0, adhoc: 3, thinking: 8, coding: 4, detail: 4, trap: 5, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 9, combinatorics: 0, adhoc: 3, thinking: 8, coding: 4, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 2, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 3, trap: 3, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 5, trap: 3, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 5, thinking: 7, coding: 6, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "offset",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 3, coding: 4, detail: 4, trap: 4, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 3, graph: 2, combinatorics: 0, adhoc: 3, thinking: 4, coding: 5, detail: 5, trap: 4, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 4, graph: 3, combinatorics: 0, adhoc: 6, thinking: 6, coding: 5, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "update",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 2, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 2, adhoc: 3, thinking: 4, coding: 2, detail: 3, trap: 3, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 2, adhoc: 4, thinking: 5, coding: 3, detail: 4, trap: 4, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 3, adhoc: 6, thinking: 6, coding: 6, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "label",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 0, coding: 2, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 5, thinking: 5, coding: 3, detail: 1, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 4, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 5, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 5, combinatorics: 0, adhoc: 7, thinking: 6, coding: 4, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "update",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 3, coding: 2, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 4, coding: 3, detail: 3, trap: 2, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 3, string: 0, graph: 0, combinatorics: 5, adhoc: 4, thinking: 8, coding: 4, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "multiply",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 2, thinking: 4, coding: 2, detail: 3, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 4, adhoc: 5, thinking: 5, coding: 4, detail: 4, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 5, adhoc: 5, thinking: 5, coding: 6, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "protected",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 0, coding: 1, detail: 2, trap: 1, score: 20, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 3, thinking: 0, coding: 3, detail: 4, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 4, thinking: 2, coding: 5, detail: 6, trap: 3, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 5, adhoc: 4, thinking: 5, coding: 6, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "final",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 4, trap: 2, score: 80, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 7, thinking: 7, coding: 4, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "exception",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 3, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 3, adhoc: 3, thinking: 3, coding: 3, detail: 1, trap: 5, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 3, thinking: 6, coding: 4, detail: 4, trap: 5, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 6, adhoc: 4, thinking: 8, coding: 6, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "split",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 5, coding: 1, detail: 1, trap: 1, score: 28, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 5, thinking: 7, coding: 1, detail: 3, trap: 4, score: 64, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 6, adhoc: 6, thinking: 7, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "document",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 5, coding: 3, detail: 4, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 5, coding: 5, detail: 4, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 7, thinking: 7, coding: 5, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 6, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 7, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 5, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "alert",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 2, adhoc: 3, thinking: 3, coding: 3, detail: 3, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 2, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 1, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 4, combinatorics: 3, adhoc: 4, thinking: 4, coding: 5, detail: 8, trap: 3, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "row",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 3, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 3, coding: 3, detail: 5, trap: 4, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 4, coding: 5, detail: 6, trap: 5, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 6, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "peer",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 4, adhoc: 1, thinking: 4, coding: 4, detail: 4, trap: 2, score: 56, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 1, combinatorics: 4, adhoc: 2, thinking: 4, coding: 5, detail: 4, trap: 3, score: 60, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 1, combinatorics: 6, adhoc: 3, thinking: 7, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "graphic",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 3, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 3, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 5, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 5, detail: 5, trap: 3, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 5, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "string",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 4, thinking: 4, coding: 3, detail: 4, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 3, adhoc: 5, thinking: 5, coding: 4, detail: 5, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 5, combinatorics: 3, adhoc: 5, thinking: 5, coding: 5, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "unite",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 3, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 3, detail: 2, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 7, coding: 5, detail: 3, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 8, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "channel",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 1, combinatorics: 0, adhoc: 2, thinking: 4, coding: 4, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 2, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 2, trap: 1, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 3, combinatorics: 0, adhoc: 4, thinking: 7, coding: 4, detail: 3, trap: 4, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 4, combinatorics: 0, adhoc: 6, thinking: 8, coding: 6, detail: 4, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "index",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 3, detail: 4, trap: 3, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 7, thinking: 7, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "domain",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 1, adhoc: 4, thinking: 2, coding: 2, detail: 3, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 1, adhoc: 5, thinking: 3, coding: 3, detail: 6, trap: 3, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 2, adhoc: 6, thinking: 4, coding: 4, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "compare",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 2, score: 20, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 4, detail: 2, trap: 3, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 4, detail: 4, trap: 4, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 8, coding: 5, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "break",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 1, coding: 1, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 3, coding: 4, detail: 4, trap: 3, score: 48, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 6, thinking: 5, coding: 5, detail: 5, trap: 5, score: 72, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 6, thinking: 6, coding: 5, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 1, adhoc: 1, thinking: 4, coding: 4, detail: 1, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 4, combinatorics: 1, adhoc: 2, thinking: 6, coding: 4, detail: 3, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 6, combinatorics: 1, adhoc: 3, thinking: 7, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "type",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 3, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 5, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 3, thinking: 1, coding: 3, detail: 5, trap: 5, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 7, trap: 5, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "task",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 5, detail: 1, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 5, detail: 3, trap: 4, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 1, thinking: 7, coding: 6, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "network",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 1, thinking: 4, coding: 4, detail: 2, trap: 2, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 6, adhoc: 1, thinking: 5, coding: 5, detail: 5, trap: 3, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 7, adhoc: 2, thinking: 7, coding: 5, detail: 5, trap: 4, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 8, adhoc: 2, thinking: 7, coding: 6, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "photo",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 3, coding: 2, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 7, thinking: 3, coding: 2, detail: 5, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 1, adhoc: 7, thinking: 4, coding: 5, detail: 8, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "task",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 3, adhoc: 2, thinking: 0, coding: 3, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 3, thinking: 1, coding: 6, detail: 5, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 4, combinatorics: 5, adhoc: 4, thinking: 5, coding: 6, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "folder",
      parts: [
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 2, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 5, adhoc: 1, thinking: 1, coding: 4, detail: 3, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 6, adhoc: 2, thinking: 2, coding: 4, detail: 5, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 8, adhoc: 2, thinking: 4, coding: 6, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "point",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 5, coding: 3, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 3, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 7, thinking: 8, coding: 6, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "level",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 3, adhoc: 0, thinking: 0, coding: 1, detail: 3, trap: 1, score: 16, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 3, adhoc: 1, thinking: 3, coding: 2, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 4, adhoc: 1, thinking: 4, coding: 4, detail: 5, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 3, graph: 0, combinatorics: 7, adhoc: 3, thinking: 5, coding: 4, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 6, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 4, graph: 0, combinatorics: 0, adhoc: 7, thinking: 4, coding: 3, detail: 7, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 5, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "index",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 4, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 6, graph: 3, combinatorics: 0, adhoc: 3, thinking: 5, coding: 6, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "abstract",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 4, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 5, trap: 2, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bool",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 3, coding: 5, detail: 4, trap: 3, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 6, adhoc: 2, thinking: 4, coding: 6, detail: 6, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 4, coding: 6, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "domain",
      parts: [
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 3, graph: 3, combinatorics: 0, adhoc: 4, thinking: 6, coding: 5, detail: 3, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 4, graph: 3, combinatorics: 0, adhoc: 4, thinking: 7, coding: 6, detail: 5, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "block",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 7, adhoc: 1, thinking: 1, coding: 4, detail: 5, trap: 3, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 9, adhoc: 1, thinking: 4, coding: 5, detail: 6, trap: 4, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 9, adhoc: 1, thinking: 5, coding: 6, detail: 7, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "image",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 4, coding: 4, detail: 3, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 6, coding: 6, detail: 6, trap: 3, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 6, coding: 6, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "state",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 3, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 2, thinking: 2, coding: 3, detail: 5, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 3, graph: 0, combinatorics: 5, adhoc: 3, thinking: 3, coding: 3, detail: 6, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 3, graph: 0, combinatorics: 6, adhoc: 4, thinking: 5, coding: 5, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "split",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 4, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 5, detail: 3, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 5, detail: 5, trap: 2, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 2, string: 5, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 6, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "try",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 3, thinking: 3, coding: 4, detail: 2, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 6, thinking: 8, coding: 5, detail: 4, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 7, thinking: 8, coding: 6, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "return",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 3, coding: 3, detail: 1, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 6, adhoc: 2, thinking: 5, coding: 4, detail: 4, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 6, adhoc: 5, thinking: 7, coding: 5, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "case",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 2, trap: 2, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 3, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 4, graph: 0, combinatorics: 4, adhoc: 3, thinking: 8, coding: 6, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "scale",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 2, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 6, coding: 3, detail: 3, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 6, coding: 3, detail: 4, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 4, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "message",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 4, adhoc: 2, thinking: 1, coding: 2, detail: 5, trap: 2, score: 44, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 5, adhoc: 3, thinking: 3, coding: 2, detail: 6, trap: 3, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 6, graph: 0, combinatorics: 6, adhoc: 4, thinking: 5, coding: 4, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "permit",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 5, combinatorics: 0, adhoc: 3, thinking: 5, coding: 5, detail: 3, trap: 2, score: 64, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 6, combinatorics: 0, adhoc: 4, thinking: 7, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "gateway",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 3, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 4, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 5, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "cookie",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 2, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 1, thinking: 2, coding: 3, detail: 4, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 3, coding: 4, detail: 6, trap: 0, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 3, thinking: 4, coding: 6, detail: 6, trap: 1, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 5, coding: 6, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "component",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 3, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 3, adhoc: 4, thinking: 2, coding: 4, detail: 3, trap: 1, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 5, graph: 0, combinatorics: 5, adhoc: 5, thinking: 7, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "signed",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 3, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 5, coding: 5, detail: 6, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 5, coding: 6, detail: 7, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 5, coding: 6, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "animate",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 2, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 4, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 4, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 4, graph: 7, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 8, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "void",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 4, adhoc: 2, thinking: 4, coding: 1, detail: 2, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 6, combinatorics: 5, adhoc: 2, thinking: 7, coding: 3, detail: 4, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 7, combinatorics: 6, adhoc: 2, thinking: 8, coding: 5, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "path",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 3, detail: 2, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 5, thinking: 3, coding: 4, detail: 6, trap: 5, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 7, thinking: 4, coding: 6, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "method",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 3, trap: 3, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 6, trap: 3, score: 68, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 5, thinking: 4, coding: 5, detail: 8, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "clock",
      parts: [
        {
          dp: 0, ds: 2, string: 1, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 3, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 3, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 6, trap: 2, score: 48, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 3, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 6, trap: 3, score: 68, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 3, graph: 3, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 8, trap: 5, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "transition",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 2, detail: 2, trap: 3, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 2, adhoc: 3, thinking: 6, coding: 3, detail: 4, trap: 4, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 8, graph: 0, combinatorics: 2, adhoc: 3, thinking: 6, coding: 5, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "query",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 2, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 4, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 3, combinatorics: 0, adhoc: 1, thinking: 3, coding: 4, detail: 5, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 8, graph: 3, combinatorics: 0, adhoc: 2, thinking: 4, coding: 6, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 0, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 4, detail: 1, trap: 1, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 6, coding: 6, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "label",
      parts: [
        {
          dp: 0, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 5, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 5, trap: 3, score: 52, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 3, graph: 0, combinatorics: 4, adhoc: 5, thinking: 5, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "peer",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 2, adhoc: 1, thinking: 5, coding: 2, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 2, adhoc: 1, thinking: 5, coding: 4, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 9, combinatorics: 2, adhoc: 2, thinking: 8, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 3, coding: 4, detail: 4, trap: 3, score: 52, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 2, thinking: 5, coding: 5, detail: 6, trap: 4, score: 60, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 2, thinking: 5, coding: 6, detail: 7, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 3, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 3, combinatorics: 0, adhoc: 0, thinking: 2, coding: 3, detail: 4, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 4, combinatorics: 0, adhoc: 0, thinking: 3, coding: 3, detail: 5, trap: 2, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 5, combinatorics: 0, adhoc: 2, thinking: 5, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "group",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 1, coding: 2, detail: 1, trap: 3, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 3, coding: 2, detail: 1, trap: 3, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 5, thinking: 3, coding: 3, detail: 1, trap: 5, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 6, adhoc: 6, thinking: 6, coding: 4, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "token",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 2, adhoc: 4, thinking: 3, coding: 2, detail: 1, trap: 4, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 3, adhoc: 4, thinking: 3, coding: 2, detail: 1, trap: 5, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 2, combinatorics: 3, adhoc: 5, thinking: 5, coding: 3, detail: 2, trap: 5, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 2, combinatorics: 3, adhoc: 5, thinking: 8, coding: 4, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "certificate",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 0, coding: 2, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 0, coding: 2, detail: 3, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 1, coding: 3, detail: 5, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 4, coding: 4, detail: 8, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "route",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 3, detail: 3, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 2, graph: 5, combinatorics: 0, adhoc: 2, thinking: 4, coding: 5, detail: 6, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 5, graph: 5, combinatorics: 0, adhoc: 3, thinking: 4, coding: 5, detail: 8, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "job",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 5, adhoc: 0, thinking: 3, coding: 4, detail: 3, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 4, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 6, adhoc: 3, thinking: 5, coding: 6, detail: 5, trap: 4, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 5, coding: 6, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "option",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 1, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 5, combinatorics: 0, adhoc: 4, thinking: 6, coding: 2, detail: 3, trap: 3, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 5, combinatorics: 0, adhoc: 7, thinking: 6, coding: 4, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "return",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 5, trap: 1, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 8, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "catch",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 4, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 4, detail: 5, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 5, detail: 8, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 5, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "int",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 1, detail: 4, trap: 3, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 4, coding: 4, detail: 6, trap: 4, score: 64, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 4, coding: 4, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "heading",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 2, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 3, thinking: 3, coding: 2, detail: 6, trap: 3, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 6, adhoc: 3, thinking: 3, coding: 3, detail: 6, trap: 3, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 7, adhoc: 5, thinking: 5, coding: 4, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "reference",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 3, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 5, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 5, thinking: 7, coding: 5, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "result",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 1, detail: 5, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 5, thinking: 5, coding: 3, detail: 5, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 3, graph: 4, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "video",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 1, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 4, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 5, trap: 4, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 6, coding: 4, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "gradient",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 4, detail: 1, trap: 4, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 5, detail: 2, trap: 4, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 5, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 5, detail: 3, trap: 4, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 5, graph: 1, combinatorics: 0, adhoc: 1, thinking: 7, coding: 6, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "split",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 4, coding: 3, detail: 2, trap: 3, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 5, coding: 3, detail: 4, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 4, adhoc: 4, thinking: 8, coding: 4, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "convert",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 5, detail: 3, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 5, detail: 4, trap: 2, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 6, detail: 6, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 6, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "view",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 2, coding: 2, detail: 3, trap: 4, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 5, thinking: 3, coding: 2, detail: 4, trap: 4, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 3, adhoc: 6, thinking: 4, coding: 5, detail: 5, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 5, adhoc: 6, thinking: 4, coding: 5, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "resize",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 2, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 2, trap: 3, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 3, trap: 3, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 7, coding: 5, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "throw",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 2, combinatorics: 1, adhoc: 1, thinking: 4, coding: 4, detail: 3, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 4, adhoc: 3, thinking: 4, coding: 4, detail: 5, trap: 5, score: 85, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 4, adhoc: 5, thinking: 5, coding: 4, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "document",
      parts: [
        {
          dp: 0, ds: 2, string: 1, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 2, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 1, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 4, trap: 3, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 4, graph: 2, combinatorics: 0, adhoc: 5, thinking: 4, coding: 6, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "socket",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 0, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 2, coding: 1, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 2, coding: 2, detail: 6, trap: 3, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 3, thinking: 3, coding: 3, detail: 6, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 9, adhoc: 3, thinking: 4, coding: 4, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "map",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 2, adhoc: 4, thinking: 3, coding: 2, detail: 0, trap: 2, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 0, combinatorics: 2, adhoc: 5, thinking: 5, coding: 2, detail: 2, trap: 3, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 3, adhoc: 7, thinking: 8, coding: 4, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "queue",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 3, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 4, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 4, detail: 4, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "route",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 2, graph: 5, combinatorics: 0, adhoc: 2, thinking: 3, coding: 4, detail: 3, trap: 5, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 5, combinatorics: 0, adhoc: 2, thinking: 3, coding: 5, detail: 5, trap: 5, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 5, graph: 6, combinatorics: 0, adhoc: 2, thinking: 6, coding: 6, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "mark",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 3, trap: 4, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 2, combinatorics: 0, adhoc: 4, thinking: 8, coding: 6, detail: 3, trap: 4, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 2, combinatorics: 0, adhoc: 6, thinking: 8, coding: 6, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "row",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 3, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 3, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 8, coding: 6, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "range",
      parts: [
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 1, combinatorics: 0, adhoc: 3, thinking: 5, coding: 3, detail: 4, trap: 2, score: 44, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 1, combinatorics: 0, adhoc: 3, thinking: 5, coding: 3, detail: 6, trap: 3, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 9, graph: 1, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scale",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 2, coding: 3, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 4, coding: 3, detail: 6, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 5, thinking: 5, coding: 5, detail: 7, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 6, thinking: 5, coding: 6, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "limit",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 3, detail: 2, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 4, trap: 4, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "data",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 4, thinking: 4, coding: 5, detail: 2, trap: 3, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 4, thinking: 6, coding: 5, detail: 3, trap: 4, score: 44, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 4, thinking: 7, coding: 5, detail: 3, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 5, thinking: 8, coding: 5, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "signal",
      parts: [
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 3, trap: 2, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 4, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 4, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 4, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 4, graph: 0, combinatorics: 0, adhoc: 4, thinking: 8, coding: 6, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scroll",
      parts: [
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 4, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 3, score: 35, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 5, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 5, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 5, graph: 6, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 8, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "queue",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 1, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 4, trap: 2, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 3, combinatorics: 0, adhoc: 4, thinking: 6, coding: 5, detail: 5, trap: 2, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 3, combinatorics: 0, adhoc: 4, thinking: 7, coding: 6, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  8: [
    {
      name: "arena",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 4, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 9, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 2, trap: 2, score: 76, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 4, ds: 11, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 8, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "nim",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 0, score: 34, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 5, coding: 2, detail: 3, trap: 1, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 3, combinatorics: 0, adhoc: 7, thinking: 8, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "recall",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 4, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 36, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 10, string: 0, graph: 5, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 4, trap: 5, score: 76, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 3, ds: 11, string: 0, graph: 5, combinatorics: 0, adhoc: 2, thinking: 4, coding: 4, detail: 7, trap: 6, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "years",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 2, trap: 1, score: 24, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 6, combinatorics: 6, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 1, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 0, string: 0, graph: 6, combinatorics: 4, adhoc: 4, thinking: 5, coding: 2, detail: 2, trap: 3, score: 64, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 9, ds: 0, string: 0, graph: 7, combinatorics: 9, adhoc: 4, thinking: 9, coding: 3, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "permit",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 4, adhoc: 0, thinking: 2, coding: 1, detail: 2, trap: 1, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 3, graph: 0, combinatorics: 4, adhoc: 1, thinking: 3, coding: 2, detail: 4, trap: 1, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 4, graph: 0, combinatorics: 7, adhoc: 6, thinking: 6, coding: 4, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "malloc",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 3, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 5, thinking: 7, coding: 2, detail: 3, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 6, adhoc: 5, thinking: 8, coding: 2, detail: 4, trap: 2, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 9, adhoc: 5, thinking: 8, coding: 5, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delete",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 3, thinking: 6, coding: 1, detail: 2, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 4, adhoc: 4, thinking: 6, coding: 2, detail: 4, trap: 3, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 4, adhoc: 6, thinking: 6, coding: 4, detail: 4, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 5, adhoc: 6, thinking: 8, coding: 5, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transition",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 3, trap: 4, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 9, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 3, detail: 4, trap: 4, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 10, graph: 0, combinatorics: 0, adhoc: 5, thinking: 7, coding: 4, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transform",
      parts: [
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 0, trap: 1, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 4, detail: 3, trap: 1, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 3, trap: 2, score: 36, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 9, coding: 6, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "update",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 7, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 7, coding: 4, detail: 4, trap: 5, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 7, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 9, coding: 4, detail: 5, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "interface",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 3, thinking: 3, coding: 2, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 2, adhoc: 5, thinking: 3, coding: 2, detail: 4, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 3, combinatorics: 4, adhoc: 8, thinking: 4, coding: 2, detail: 5, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 3, combinatorics: 4, adhoc: 8, thinking: 8, coding: 4, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "divide",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 3, adhoc: 3, thinking: 4, coding: 2, detail: 5, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 6, adhoc: 4, thinking: 6, coding: 2, detail: 7, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 8, combinatorics: 8, adhoc: 4, thinking: 6, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "warning",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 4, thinking: 5, coding: 4, detail: 3, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 0, string: 0, graph: 4, combinatorics: 2, adhoc: 5, thinking: 6, coding: 4, detail: 6, trap: 2, score: 60, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 8, ds: 0, string: 0, graph: 6, combinatorics: 3, adhoc: 5, thinking: 7, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "component",
      parts: [
        {
          dp: 3, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 2, coding: 3, detail: 4, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 3, string: 0, graph: 0, combinatorics: 5, adhoc: 6, thinking: 5, coding: 3, detail: 6, trap: 4, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 4, string: 0, graph: 0, combinatorics: 5, adhoc: 8, thinking: 6, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "router",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 10, combinatorics: 0, adhoc: 4, thinking: 7, coding: 5, detail: 4, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 10, combinatorics: 0, adhoc: 4, thinking: 9, coding: 5, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "form",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 3, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 4, detail: 4, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 6, detail: 6, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 6, coding: 6, detail: 7, trap: 4, score: 90, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 11, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 6, detail: 8, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "route",
      parts: [
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 2, coding: 2, detail: 4, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 3, detail: 5, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 4, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "heading",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 3, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 4, detail: 4, trap: 3, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 5, detail: 5, trap: 3, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 5, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "timer",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 3, score: 20, independent: 1, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 4, coding: 4, detail: 4, trap: 5, score: 36, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 6, thinking: 5, coding: 5, detail: 6, trap: 5, score: 68, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 0, combinatorics: 3, adhoc: 7, thinking: 5, coding: 6, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delete",
      parts: [
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 3, detail: 3, trap: 5, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 4, graph: 0, combinatorics: 3, adhoc: 4, thinking: 6, coding: 4, detail: 5, trap: 5, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 5, graph: 0, combinatorics: 4, adhoc: 6, thinking: 6, coding: 6, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "form",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 3, thinking: 1, coding: 2, detail: 5, trap: 1, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 7, combinatorics: 7, adhoc: 4, thinking: 4, coding: 4, detail: 8, trap: 3, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 0, graph: 9, combinatorics: 7, adhoc: 5, thinking: 5, coding: 4, detail: 9, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "symbol",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 3, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 4, coding: 2, detail: 7, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 5, coding: 2, detail: 8, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 5, coding: 5, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "light",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 16, independent: 1, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 1, adhoc: 1, thinking: 4, coding: 1, detail: 2, trap: 2, score: 32, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 8, combinatorics: 1, adhoc: 4, thinking: 8, coding: 3, detail: 4, trap: 4, score: 68, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 11, combinatorics: 1, adhoc: 4, thinking: 9, coding: 4, detail: 5, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "graph",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 4, detail: 4, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 3, coding: 4, detail: 6, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 9, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shadow",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 2, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 6, adhoc: 1, thinking: 6, coding: 3, detail: 2, trap: 4, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 1, combinatorics: 7, adhoc: 4, thinking: 7, coding: 3, detail: 4, trap: 5, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 8, string: 0, graph: 3, combinatorics: 7, adhoc: 5, thinking: 7, coding: 4, detail: 7, trap: 6, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "query",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 4, trap: 2, score: 28, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 3, thinking: 4, coding: 6, detail: 8, trap: 4, score: 64, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 0, graph: 8, combinatorics: 0, adhoc: 5, thinking: 6, coding: 6, detail: 8, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "flag",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 4, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 5, trap: 3, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 4, string: 0, graph: 5, combinatorics: 0, adhoc: 6, thinking: 4, coding: 4, detail: 7, trap: 4, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 6, string: 0, graph: 5, combinatorics: 0, adhoc: 8, thinking: 5, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "list",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 3, coding: 3, detail: 4, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 8, adhoc: 4, thinking: 5, coding: 3, detail: 4, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 10, adhoc: 5, thinking: 9, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "cache",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 4, coding: 4, detail: 5, trap: 4, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 5, coding: 4, detail: 5, trap: 6, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 3, adhoc: 7, thinking: 6, coding: 4, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "throw",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 1, detail: 5, trap: 2, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 6, coding: 2, detail: 7, trap: 4, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 4, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "route",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 5, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 5, detail: 5, trap: 3, score: 45, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 6, coding: 6, detail: 5, trap: 5, score: 90, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 4, combinatorics: 0, adhoc: 5, thinking: 7, coding: 6, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "const",
      parts: [
        {
          dp: 2, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 4, trap: 4, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 2, detail: 5, trap: 5, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 7, string: 2, graph: 0, combinatorics: 0, adhoc: 6, thinking: 9, coding: 5, detail: 5, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "union",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 3, adhoc: 0, thinking: 3, coding: 3, detail: 4, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 4, adhoc: 1, thinking: 3, coding: 4, detail: 5, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 6, adhoc: 3, thinking: 5, coding: 4, detail: 7, trap: 4, score: 90, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 7, adhoc: 5, thinking: 6, coding: 6, detail: 8, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "parameter",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 5, detail: 4, trap: 3, score: 65, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 6, detail: 4, trap: 4, score: 90, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 9, coding: 6, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "process",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 3, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 5, thinking: 5, coding: 5, detail: 6, trap: 4, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 6, graph: 4, combinatorics: 0, adhoc: 6, thinking: 6, coding: 5, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authorize",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 2, detail: 3, trap: 4, score: 32, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 4, detail: 3, trap: 4, score: 56, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 7, thinking: 8, coding: 6, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "validate",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 5, adhoc: 4, thinking: 3, coding: 3, detail: 6, trap: 2, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 6, adhoc: 4, thinking: 5, coding: 4, detail: 8, trap: 4, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 5, graph: 0, combinatorics: 6, adhoc: 6, thinking: 5, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "folder",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 3, coding: 1, detail: 3, trap: 5, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 5, string: 0, graph: 4, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 6, trap: 5, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 6, string: 0, graph: 4, combinatorics: 0, adhoc: 7, thinking: 6, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "insert",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 5, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 7, trap: 4, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 6, thinking: 5, coding: 6, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 4, coding: 4, detail: 6, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 3, combinatorics: 0, adhoc: 7, thinking: 6, coding: 4, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 5, thinking: 4, coding: 2, detail: 3, trap: 3, score: 65, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 4, coding: 3, detail: 6, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 7, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "join",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 3, combinatorics: 0, adhoc: 1, thinking: 4, coding: 2, detail: 4, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 5, graph: 7, combinatorics: 0, adhoc: 2, thinking: 8, coding: 4, detail: 4, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 6, graph: 9, combinatorics: 0, adhoc: 3, thinking: 9, coding: 5, detail: 5, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "config",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 4, adhoc: 4, thinking: 4, coding: 4, detail: 4, trap: 4, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 5, adhoc: 6, thinking: 4, coding: 5, detail: 7, trap: 6, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 1, combinatorics: 5, adhoc: 7, thinking: 5, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "point",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 5, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 7, combinatorics: 2, adhoc: 2, thinking: 4, coding: 2, detail: 4, trap: 3, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 8, combinatorics: 2, adhoc: 3, thinking: 7, coding: 3, detail: 5, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 8, combinatorics: 4, adhoc: 4, thinking: 8, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "verify",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 3, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 5, graph: 2, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 5, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 6, graph: 2, combinatorics: 0, adhoc: 5, thinking: 7, coding: 5, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "query",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 3, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 4, trap: 1, score: 24, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 3, coding: 4, detail: 5, trap: 2, score: 56, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 3, adhoc: 5, thinking: 7, coding: 4, detail: 5, trap: 3, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 4, adhoc: 7, thinking: 8, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "malloc",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 3, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 3, string: 0, graph: 4, combinatorics: 0, adhoc: 5, thinking: 4, coding: 2, detail: 7, trap: 4, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 4, string: 0, graph: 5, combinatorics: 0, adhoc: 7, thinking: 6, coding: 4, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "divide",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 3, detail: 2, trap: 3, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 3, detail: 2, trap: 4, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 6, coding: 4, detail: 5, trap: 5, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 2, adhoc: 7, thinking: 8, coding: 5, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "short",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 1, adhoc: 2, thinking: 0, coding: 2, detail: 1, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 2, adhoc: 5, thinking: 1, coding: 4, detail: 1, trap: 4, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 1, combinatorics: 5, adhoc: 6, thinking: 6, coding: 5, detail: 3, trap: 5, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 2, combinatorics: 7, adhoc: 6, thinking: 8, coding: 5, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "debug",
      parts: [
        {
          dp: 2, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 2, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 4, trap: 3, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 3, graph: 6, combinatorics: 0, adhoc: 2, thinking: 4, coding: 4, detail: 6, trap: 3, score: 45, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 6, graph: 7, combinatorics: 0, adhoc: 4, thinking: 5, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scale",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 2, thinking: 5, coding: 2, detail: 3, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 2, adhoc: 4, thinking: 6, coding: 3, detail: 4, trap: 4, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 2, adhoc: 6, thinking: 7, coding: 3, detail: 6, trap: 5, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 7, combinatorics: 3, adhoc: 6, thinking: 7, coding: 6, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "popup",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 4, coding: 4, detail: 1, trap: 3, score: 32, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 5, coding: 4, detail: 2, trap: 4, score: 56, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 8, adhoc: 4, thinking: 7, coding: 4, detail: 2, trap: 4, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 11, adhoc: 4, thinking: 9, coding: 4, detail: 5, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "authorize",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 5, detail: 4, trap: 3, score: 40, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 5, detail: 7, trap: 6, score: 72, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 10, graph: 0, combinatorics: 0, adhoc: 4, thinking: 7, coding: 5, detail: 7, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "map",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 3, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 3, coding: 2, detail: 5, trap: 3, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 2, detail: 6, trap: 3, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 5, coding: 3, detail: 7, trap: 4, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 0, graph: 0, combinatorics: 4, adhoc: 4, thinking: 5, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "host",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 2, thinking: 1, coding: 5, detail: 4, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 7, adhoc: 4, thinking: 3, coding: 5, detail: 6, trap: 4, score: 64, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 8, adhoc: 5, thinking: 5, coding: 6, detail: 9, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "clone",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 4, trap: 2, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 6, thinking: 4, coding: 4, detail: 5, trap: 3, score: 44, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 1, string: 0, graph: 4, combinatorics: 0, adhoc: 7, thinking: 7, coding: 5, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "menu",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 6, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 4, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 7, combinatorics: 0, adhoc: 6, thinking: 6, coding: 5, detail: 5, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 8, combinatorics: 0, adhoc: 6, thinking: 7, coding: 5, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clock",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 0, coding: 2, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 4, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 3, thinking: 2, coding: 5, detail: 4, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 0, string: 0, graph: 8, combinatorics: 4, adhoc: 4, thinking: 7, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "file",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 5, coding: 2, detail: 5, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 9, adhoc: 4, thinking: 6, coding: 4, detail: 6, trap: 6, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 10, adhoc: 5, thinking: 8, coding: 4, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 3, detail: 3, trap: 2, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 8, coding: 4, detail: 5, trap: 3, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 6, thinking: 9, coding: 4, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "greater",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 1, coding: 3, detail: 3, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 3, detail: 5, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 3, coding: 3, detail: 6, trap: 3, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 2, adhoc: 6, thinking: 5, coding: 4, detail: 8, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 2, adhoc: 8, thinking: 5, coding: 5, detail: 9, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sentence",
      parts: [
        {
          dp: 2, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 1, trap: 3, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 4, string: 0, graph: 1, combinatorics: 0, adhoc: 6, thinking: 6, coding: 4, detail: 5, trap: 5, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 5, string: 0, graph: 1, combinatorics: 0, adhoc: 8, thinking: 7, coding: 5, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "mode",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 2, detail: 1, trap: 2, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 2, trap: 3, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 4, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 5, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "trigger",
      parts: [
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 4, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 5, trap: 3, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 10, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 5, detail: 5, trap: 4, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 11, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 5, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sign",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 5, coding: 3, detail: 5, trap: 3, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 5, coding: 5, detail: 6, trap: 4, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 5, adhoc: 6, thinking: 7, coding: 6, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "data",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 1, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 5, graph: 3, combinatorics: 0, adhoc: 2, thinking: 6, coding: 4, detail: 6, trap: 4, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 7, string: 7, graph: 4, combinatorics: 0, adhoc: 4, thinking: 6, coding: 4, detail: 6, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 9, string: 7, graph: 4, combinatorics: 0, adhoc: 4, thinking: 7, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "radio",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 6, thinking: 6, coding: 1, detail: 3, trap: 5, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 8, thinking: 9, coding: 4, detail: 3, trap: 6, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 3, string: 0, graph: 0, combinatorics: 3, adhoc: 8, thinking: 9, coding: 4, detail: 5, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "output",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 3, coding: 3, detail: 1, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 3, thinking: 5, coding: 4, detail: 2, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 9, adhoc: 5, thinking: 8, coding: 5, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "certificate",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 5, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 1, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 3, detail: 8, trap: 3, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 2, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authorize",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 2, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 2, detail: 3, trap: 4, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 3, detail: 4, trap: 5, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 8, coding: 5, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 5, detail: 4, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 10, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 7, coding: 5, detail: 4, trap: 4, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 11, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 8, coding: 5, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "divide",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 2, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 3, combinatorics: 0, adhoc: 5, thinking: 2, coding: 4, detail: 3, trap: 2, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 3, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 4, trap: 4, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 3, combinatorics: 0, adhoc: 5, thinking: 6, coding: 5, detail: 6, trap: 4, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 3, combinatorics: 0, adhoc: 8, thinking: 6, coding: 6, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "field",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 2, detail: 4, trap: 3, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 8, coding: 2, detail: 4, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 9, coding: 4, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "resize",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 3, coding: 3, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 2, combinatorics: 6, adhoc: 4, thinking: 4, coding: 3, detail: 4, trap: 3, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 2, combinatorics: 6, adhoc: 4, thinking: 5, coding: 3, detail: 5, trap: 4, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 2, combinatorics: 7, adhoc: 4, thinking: 5, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "value",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 2, combinatorics: 1, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 0, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 3, combinatorics: 1, adhoc: 2, thinking: 3, coding: 4, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 4, graph: 5, combinatorics: 1, adhoc: 2, thinking: 4, coding: 5, detail: 2, trap: 3, score: 50, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 5, graph: 7, combinatorics: 1, adhoc: 2, thinking: 6, coding: 6, detail: 7, trap: 3, score: 80, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 7, graph: 7, combinatorics: 2, adhoc: 3, thinking: 7, coding: 6, detail: 7, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "update",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 3, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 3, detail: 3, trap: 3, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 3, graph: 0, combinatorics: 0, adhoc: 5, thinking: 7, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "router",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 4, coding: 2, detail: 3, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 6, coding: 2, detail: 5, trap: 3, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 4, thinking: 7, coding: 5, detail: 5, trap: 5, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 0, string: 0, graph: 2, combinatorics: 8, adhoc: 4, thinking: 9, coding: 6, detail: 5, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "output",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 3, thinking: 3, coding: 3, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 4, thinking: 4, coding: 4, detail: 5, trap: 3, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 7, thinking: 6, coding: 5, detail: 7, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 8, thinking: 7, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "cluster",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 2, coding: 1, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 7, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 4, string: 0, graph: 8, combinatorics: 0, adhoc: 5, thinking: 5, coding: 5, detail: 9, trap: 5, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "continue",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 1, trap: 2, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 5, thinking: 6, coding: 2, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 6, thinking: 7, coding: 4, detail: 3, trap: 4, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 6, thinking: 9, coding: 5, detail: 4, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 1, graph: 0, combinatorics: 5, adhoc: 7, thinking: 9, coding: 5, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "float",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 2, combinatorics: 3, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 4, graph: 3, combinatorics: 4, adhoc: 3, thinking: 6, coding: 3, detail: 4, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 6, graph: 3, combinatorics: 6, adhoc: 4, thinking: 7, coding: 3, detail: 5, trap: 6, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 7, graph: 3, combinatorics: 8, adhoc: 5, thinking: 8, coding: 4, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "token",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 4, coding: 4, detail: 2, trap: 3, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 6, coding: 6, detail: 5, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 8, coding: 6, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "gateway",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 3, adhoc: 2, thinking: 4, coding: 3, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 5, thinking: 5, coding: 4, detail: 6, trap: 5, score: 60, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 0, graph: 3, combinatorics: 4, adhoc: 8, thinking: 7, coding: 5, detail: 7, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "final",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 1, detail: 1, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 1, coding: 2, detail: 2, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 6, thinking: 2, coding: 3, detail: 4, trap: 5, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 6, thinking: 3, coding: 4, detail: 8, trap: 6, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 8, adhoc: 7, thinking: 5, coding: 4, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "permit",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 3, detail: 4, trap: 4, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 5, trap: 5, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 5, detail: 8, trap: 5, score: 75, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 5, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "when",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 2, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 7, trap: 5, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 5, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "parameter",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 1, coding: 3, detail: 1, trap: 2, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 2, coding: 3, detail: 3, trap: 4, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 3, coding: 4, detail: 5, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 10, adhoc: 4, thinking: 6, coding: 5, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pipe",
      parts: [
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 5, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 2, detail: 4, trap: 3, score: 50, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 8, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 7, coding: 3, detail: 4, trap: 4, score: 85, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 11, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 8, coding: 6, detail: 6, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "tone",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 5, thinking: 3, coding: 1, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 4, graph: 0, combinatorics: 0, adhoc: 6, thinking: 4, coding: 3, detail: 6, trap: 2, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 6, graph: 0, combinatorics: 0, adhoc: 6, thinking: 4, coding: 3, detail: 7, trap: 5, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 7, graph: 0, combinatorics: 0, adhoc: 7, thinking: 6, coding: 4, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "map",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 4, detail: 4, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 6, thinking: 6, coding: 4, detail: 5, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 1, combinatorics: 0, adhoc: 8, thinking: 8, coding: 6, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "record",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 5, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 5, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 0, combinatorics: 1, adhoc: 6, thinking: 9, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "protocol",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 3, detail: 5, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 10, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 7, coding: 3, detail: 5, trap: 5, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 11, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 8, coding: 4, detail: 6, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "encrypt",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 5, trap: 4, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 6, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 6, coding: 4, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "blur",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 4, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 9, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 3, detail: 5, trap: 6, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 11, graph: 0, combinatorics: 0, adhoc: 3, thinking: 8, coding: 5, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shadow",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 2, trap: 3, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 1, thinking: 7, coding: 2, detail: 3, trap: 4, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 1, thinking: 8, coding: 3, detail: 3, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 7, graph: 1, combinatorics: 0, adhoc: 4, thinking: 9, coding: 3, detail: 4, trap: 5, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 7, graph: 1, combinatorics: 0, adhoc: 6, thinking: 9, coding: 4, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "route",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 7, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 9, adhoc: 4, thinking: 4, coding: 2, detail: 3, trap: 4, score: 48, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 11, adhoc: 4, thinking: 4, coding: 2, detail: 3, trap: 4, score: 64, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 11, adhoc: 4, thinking: 7, coding: 4, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "compare",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 4, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 5, trap: 5, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 4, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "point",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 2, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 5, thinking: 6, coding: 3, detail: 4, trap: 3, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 1, graph: 3, combinatorics: 0, adhoc: 7, thinking: 6, coding: 3, detail: 7, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 1, graph: 3, combinatorics: 0, adhoc: 8, thinking: 6, coding: 4, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pointer",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 4, trap: 3, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 6, trap: 5, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 2, string: 0, graph: 4, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 7, trap: 6, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 2, string: 0, graph: 4, combinatorics: 0, adhoc: 7, thinking: 6, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "range",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 4, adhoc: 4, thinking: 5, coding: 4, detail: 2, trap: 4, score: 56, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 5, adhoc: 4, thinking: 7, coding: 4, detail: 5, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 7, combinatorics: 7, adhoc: 5, thinking: 9, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "token",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 1, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 3, coding: 2, detail: 2, trap: 3, score: 35, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 5, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 4, coding: 3, detail: 8, trap: 5, score: 80, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 7, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 5, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 6, graph: 2, combinatorics: 0, adhoc: 7, thinking: 6, coding: 4, detail: 5, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 6, graph: 4, combinatorics: 0, adhoc: 7, thinking: 7, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "axis",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 4, coding: 2, detail: 5, trap: 5, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 4, adhoc: 7, thinking: 4, coding: 4, detail: 8, trap: 6, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 7, adhoc: 8, thinking: 5, coding: 4, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "slide",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 3, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 4, coding: 5, detail: 6, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 5, thinking: 5, coding: 6, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  9: [
    {
      name: "document",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 0, coding: 3, detail: 2, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 5, thinking: 1, coding: 4, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 6, thinking: 3, coding: 4, detail: 6, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 7, adhoc: 9, thinking: 6, coding: 5, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "short",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 3, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 4, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 4, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 4, combinatorics: 0, adhoc: 5, thinking: 5, coding: 6, detail: 9, trap: 5, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 5, graph: 7, combinatorics: 0, adhoc: 7, thinking: 5, coding: 6, detail: 11, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "password",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 9, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 5, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 12, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 8, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 13, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 4, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "allow",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 3, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 4, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 3, string: 0, graph: 6, combinatorics: 0, adhoc: 6, thinking: 6, coding: 5, detail: 9, trap: 1, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 5, string: 0, graph: 8, combinatorics: 0, adhoc: 7, thinking: 6, coding: 5, detail: 10, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "increment",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 1, adhoc: 2, thinking: 1, coding: 1, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 6, combinatorics: 3, adhoc: 6, thinking: 1, coding: 2, detail: 8, trap: 1, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 7, combinatorics: 3, adhoc: 6, thinking: 5, coding: 2, detail: 10, trap: 2, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 9, combinatorics: 3, adhoc: 7, thinking: 6, coding: 4, detail: 10, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "picture",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 5, combinatorics: 2, adhoc: 1, thinking: 4, coding: 3, detail: 6, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 7, combinatorics: 4, adhoc: 3, thinking: 5, coding: 4, detail: 8, trap: 5, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 10, ds: 0, string: 0, graph: 10, combinatorics: 4, adhoc: 3, thinking: 6, coding: 5, detail: 10, trap: 5, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 3, trap: 2, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 2, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 3, detail: 6, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 11, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 8, coding: 4, detail: 8, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 14, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 8, coding: 4, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "having",
      parts: [
        {
          dp: 1, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 1, trap: 3, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 4, string: 4, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 3, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 7, string: 4, graph: 0, combinatorics: 0, adhoc: 7, thinking: 8, coding: 4, detail: 8, trap: 5, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "join",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 5, combinatorics: 0, adhoc: 5, thinking: 3, coding: 4, detail: 5, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 5, combinatorics: 0, adhoc: 7, thinking: 6, coding: 4, detail: 7, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 10, graph: 5, combinatorics: 0, adhoc: 7, thinking: 7, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "authenticate",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 2, combinatorics: 7, adhoc: 0, thinking: 3, coding: 2, detail: 5, trap: 5, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 2, combinatorics: 8, adhoc: 0, thinking: 7, coding: 5, detail: 6, trap: 5, score: 75, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 9, graph: 2, combinatorics: 10, adhoc: 1, thinking: 9, coding: 6, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "point",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 8, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 6, coding: 5, detail: 7, trap: 4, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 9, string: 0, graph: 6, combinatorics: 0, adhoc: 4, thinking: 8, coding: 6, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "break",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 3, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 4, thinking: 6, coding: 2, detail: 4, trap: 4, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 4, adhoc: 5, thinking: 6, coding: 3, detail: 5, trap: 4, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 8, combinatorics: 10, adhoc: 5, thinking: 7, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "dialog",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 0, coding: 3, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 1, coding: 3, detail: 4, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 5, coding: 5, detail: 6, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 5, ds: 3, string: 0, graph: 0, combinatorics: 8, adhoc: 6, thinking: 8, coding: 6, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "encrypt",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 3, coding: 3, detail: 4, trap: 5, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 5, adhoc: 5, thinking: 6, coding: 4, detail: 6, trap: 5, score: 60, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 6, adhoc: 6, thinking: 9, coding: 5, detail: 7, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "transform",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 3, trap: 3, score: 20, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 3, detail: 6, trap: 3, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 4, coding: 3, detail: 6, trap: 3, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 13, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 5, coding: 5, detail: 7, trap: 5, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 14, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 6, coding: 6, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 0, thinking: 2, coding: 3, detail: 2, trap: 2, score: 20, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 0, graph: 0, combinatorics: 7, adhoc: 0, thinking: 6, coding: 5, detail: 6, trap: 3, score: 70, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 5, ds: 2, string: 0, graph: 0, combinatorics: 9, adhoc: 1, thinking: 7, coding: 5, detail: 7, trap: 5, score: 85, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 8, ds: 3, string: 0, graph: 0, combinatorics: 12, adhoc: 1, thinking: 7, coding: 6, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "info",
      parts: [
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 3, thinking: 3, coding: 3, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 4, adhoc: 3, thinking: 5, coding: 4, detail: 2, trap: 5, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 4, graph: 0, combinatorics: 6, adhoc: 3, thinking: 6, coding: 5, detail: 2, trap: 5, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 6, graph: 0, combinatorics: 7, adhoc: 3, thinking: 8, coding: 6, detail: 4, trap: 6, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 8, graph: 0, combinatorics: 8, adhoc: 3, thinking: 10, coding: 6, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "blur",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 1, combinatorics: 0, adhoc: 5, thinking: 3, coding: 2, detail: 2, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 6, graph: 2, combinatorics: 0, adhoc: 7, thinking: 4, coding: 4, detail: 6, trap: 4, score: 90, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 6, graph: 3, combinatorics: 0, adhoc: 9, thinking: 5, coding: 4, detail: 11, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pipe",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 4, thinking: 4, coding: 2, detail: 4, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 7, combinatorics: 6, adhoc: 6, thinking: 8, coding: 3, detail: 5, trap: 4, score: 64, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 7, combinatorics: 7, adhoc: 6, thinking: 10, coding: 6, detail: 6, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "job",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 3, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 3, trap: 0, score: 28, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 7, thinking: 7, coding: 5, detail: 7, trap: 3, score: 60, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 9, graph: 0, combinatorics: 0, adhoc: 7, thinking: 8, coding: 5, detail: 8, trap: 5, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 6, combinatorics: 0, adhoc: 4, thinking: 6, coding: 3, detail: 4, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 7, combinatorics: 0, adhoc: 6, thinking: 10, coding: 3, detail: 4, trap: 4, score: 80, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 7, combinatorics: 0, adhoc: 6, thinking: 11, coding: 4, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "list",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 4, graph: 0, combinatorics: 4, adhoc: 1, thinking: 5, coding: 2, detail: 3, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 8, graph: 0, combinatorics: 7, adhoc: 1, thinking: 6, coding: 5, detail: 8, trap: 3, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 11, graph: 0, combinatorics: 8, adhoc: 1, thinking: 7, coding: 6, detail: 9, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "update",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 3, coding: 1, detail: 3, trap: 3, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 2, combinatorics: 0, adhoc: 5, thinking: 6, coding: 3, detail: 8, trap: 5, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 2, combinatorics: 0, adhoc: 7, thinking: 7, coding: 5, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "edge",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 2, score: 20, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 3, coding: 1, detail: 4, trap: 4, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 2, combinatorics: 0, adhoc: 5, thinking: 5, coding: 1, detail: 8, trap: 4, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 2, combinatorics: 0, adhoc: 6, thinking: 8, coding: 6, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "column",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 2, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 2, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 7, coding: 5, detail: 4, trap: 4, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 9, coding: 5, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "long",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 3, thinking: 4, coding: 3, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 7, adhoc: 3, thinking: 4, coding: 4, detail: 4, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 10, adhoc: 6, thinking: 10, coding: 5, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "subtract",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 9, adhoc: 4, thinking: 4, coding: 4, detail: 7, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 12, adhoc: 4, thinking: 5, coding: 5, detail: 11, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "having",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 3, adhoc: 1, thinking: 2, coding: 3, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 8, combinatorics: 3, adhoc: 1, thinking: 3, coding: 5, detail: 4, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 13, combinatorics: 3, adhoc: 1, thinking: 5, coding: 6, detail: 5, trap: 6, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 14, combinatorics: 5, adhoc: 1, thinking: 10, coding: 6, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flip",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 4, detail: 5, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 7, thinking: 6, coding: 4, detail: 7, trap: 5, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 7, thinking: 9, coding: 4, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "expand",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 2, thinking: 1, coding: 2, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 5, adhoc: 5, thinking: 2, coding: 2, detail: 4, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 5, adhoc: 6, thinking: 5, coding: 3, detail: 4, trap: 2, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 5, adhoc: 6, thinking: 8, coding: 4, detail: 5, trap: 3, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 5, adhoc: 9, thinking: 11, coding: 6, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "node",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 3, detail: 6, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 5, graph: 1, combinatorics: 0, adhoc: 4, thinking: 1, coding: 3, detail: 9, trap: 2, score: 40, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 10, ds: 0, string: 9, graph: 3, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 11, trap: 6, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "array",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 1, coding: 3, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 3, coding: 3, detail: 3, trap: 4, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 2, thinking: 3, coding: 4, detail: 4, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 8, adhoc: 2, thinking: 6, coding: 4, detail: 7, trap: 5, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 11, ds: 0, string: 0, graph: 0, combinatorics: 10, adhoc: 3, thinking: 6, coding: 5, detail: 10, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authenticate",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 9, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 2, trap: 3, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 10, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 6, trap: 4, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 11, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 8, coding: 6, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "router",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 3, detail: 5, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 9, coding: 3, detail: 6, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 1, graph: 0, combinatorics: 0, adhoc: 6, thinking: 9, coding: 4, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "offset",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 5, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 6, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 6, combinatorics: 1, adhoc: 2, thinking: 3, coding: 4, detail: 9, trap: 3, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 11, combinatorics: 3, adhoc: 2, thinking: 5, coding: 5, detail: 11, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "info",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 3, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 3, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 5, graph: 3, combinatorics: 0, adhoc: 4, thinking: 6, coding: 3, detail: 4, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 7, graph: 5, combinatorics: 0, adhoc: 8, thinking: 8, coding: 5, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "cookie",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 3, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 6, coding: 3, detail: 2, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 12, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 10, coding: 5, detail: 5, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 14, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 11, coding: 6, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "path",
      parts: [
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 3, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 6, trap: 4, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 9, trap: 6, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 9, thinking: 5, coding: 4, detail: 11, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "deny",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 5, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 6, thinking: 4, coding: 5, detail: 7, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 8, thinking: 8, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "sentence",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 5, thinking: 7, coding: 2, detail: 5, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 6, thinking: 9, coding: 3, detail: 6, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 9, graph: 0, combinatorics: 0, adhoc: 7, thinking: 10, coding: 4, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "signal",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 3, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 3, detail: 4, trap: 3, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 3, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 4, detail: 7, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 4, graph: 0, combinatorics: 0, adhoc: 8, thinking: 8, coding: 5, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "socket",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 4, combinatorics: 5, adhoc: 4, thinking: 3, coding: 2, detail: 3, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 5, combinatorics: 5, adhoc: 4, thinking: 4, coding: 3, detail: 3, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 7, combinatorics: 6, adhoc: 4, thinking: 8, coding: 5, detail: 3, trap: 3, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 7, combinatorics: 8, adhoc: 6, thinking: 11, coding: 5, detail: 5, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "word",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 2, detail: 5, trap: 3, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 4, graph: 0, combinatorics: 1, adhoc: 3, thinking: 5, coding: 2, detail: 5, trap: 3, score: 40, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 0, string: 4, graph: 0, combinatorics: 1, adhoc: 4, thinking: 5, coding: 2, detail: 10, trap: 3, score: 68, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 8, ds: 0, string: 9, graph: 0, combinatorics: 1, adhoc: 5, thinking: 5, coding: 4, detail: 11, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "struct",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 3, combinatorics: 0, adhoc: 4, thinking: 3, coding: 1, detail: 4, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 5, graph: 3, combinatorics: 0, adhoc: 7, thinking: 4, coding: 4, detail: 7, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 6, graph: 4, combinatorics: 0, adhoc: 8, thinking: 5, coding: 5, detail: 7, trap: 4, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 5, string: 7, graph: 5, combinatorics: 0, adhoc: 8, thinking: 6, coding: 5, detail: 10, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "move",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 0, thinking: 3, coding: 2, detail: 2, trap: 3, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 9, adhoc: 3, thinking: 6, coding: 5, detail: 3, trap: 5, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 9, adhoc: 4, thinking: 8, coding: 5, detail: 4, trap: 6, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 11, adhoc: 4, thinking: 10, coding: 6, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "interface",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 5, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 12, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 10, trap: 4, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 12, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 11, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "transform",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 2, detail: 0, trap: 3, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 2, detail: 1, trap: 4, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 2, adhoc: 6, thinking: 7, coding: 4, detail: 4, trap: 4, score: 48, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 0, graph: 1, combinatorics: 4, adhoc: 6, thinking: 7, coding: 4, detail: 4, trap: 5, score: 68, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 0, graph: 1, combinatorics: 6, adhoc: 9, thinking: 10, coding: 4, detail: 6, trap: 5, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "subtract",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 2, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 2, detail: 2, trap: 5, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 9, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 4, detail: 6, trap: 5, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 13, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "setting",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 6, combinatorics: 0, adhoc: 6, thinking: 5, coding: 2, detail: 3, trap: 4, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 7, combinatorics: 0, adhoc: 8, thinking: 6, coding: 3, detail: 8, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 8, combinatorics: 0, adhoc: 9, thinking: 7, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "graphic",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 4, detail: 3, trap: 4, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 5, detail: 5, trap: 4, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 1, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 5, detail: 9, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "key",
      parts: [
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 5, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 3, detail: 6, trap: 3, score: 48, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 7, thinking: 4, coding: 3, detail: 8, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 9, thinking: 5, coding: 4, detail: 11, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "static",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 5, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 4, thinking: 7, coding: 5, detail: 7, trap: 5, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 8, combinatorics: 0, adhoc: 4, thinking: 7, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "mode",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 5, adhoc: 5, thinking: 5, coding: 3, detail: 3, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 6, adhoc: 5, thinking: 9, coding: 5, detail: 4, trap: 5, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 8, adhoc: 8, thinking: 9, coding: 5, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "job",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 1, combinatorics: 6, adhoc: 6, thinking: 8, coding: 4, detail: 4, trap: 6, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 1, combinatorics: 8, adhoc: 7, thinking: 10, coding: 4, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "equal",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 4, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 5, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 5, detail: 5, trap: 5, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 5, string: 4, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 5, detail: 8, trap: 5, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 6, string: 4, graph: 0, combinatorics: 0, adhoc: 7, thinking: 7, coding: 5, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "if",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 5, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 7, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 4, trap: 4, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 14, graph: 0, combinatorics: 0, adhoc: 3, thinking: 9, coding: 4, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shift",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 2, combinatorics: 4, adhoc: 4, thinking: 6, coding: 6, detail: 5, trap: 1, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 2, combinatorics: 5, adhoc: 6, thinking: 8, coding: 6, detail: 6, trap: 2, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 3, combinatorics: 6, adhoc: 6, thinking: 10, coding: 6, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "error",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 7, combinatorics: 1, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 3, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 7, combinatorics: 1, adhoc: 2, thinking: 5, coding: 4, detail: 4, trap: 3, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 10, graph: 8, combinatorics: 1, adhoc: 4, thinking: 11, coding: 5, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "font",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 1, trap: 3, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 7, coding: 4, detail: 5, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 9, coding: 5, detail: 7, trap: 4, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 9, coding: 6, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 1, coding: 2, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 3, coding: 3, detail: 7, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 2, combinatorics: 8, adhoc: 4, thinking: 6, coding: 4, detail: 10, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 4, trap: 1, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 7, trap: 3, score: 85, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 7, thinking: 8, coding: 6, detail: 8, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "checkbox",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 2, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 7, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 4, detail: 9, trap: 1, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 12, ds: 0, string: 10, graph: 0, combinatorics: 0, adhoc: 1, thinking: 6, coding: 6, detail: 10, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transform",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 1, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 3, adhoc: 4, thinking: 5, coding: 1, detail: 6, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 5, graph: 0, combinatorics: 4, adhoc: 7, thinking: 7, coding: 5, detail: 8, trap: 3, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 7, graph: 0, combinatorics: 5, adhoc: 8, thinking: 8, coding: 5, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "point",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 3, combinatorics: 0, adhoc: 3, thinking: 0, coding: 5, detail: 5, trap: 3, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 3, combinatorics: 0, adhoc: 5, thinking: 3, coding: 5, detail: 6, trap: 3, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 3, combinatorics: 0, adhoc: 6, thinking: 4, coding: 5, detail: 7, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 4, combinatorics: 0, adhoc: 9, thinking: 7, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "proxy",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 4, trap: 2, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 4, detail: 5, trap: 2, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 5, string: 3, graph: 0, combinatorics: 0, adhoc: 9, thinking: 5, coding: 5, detail: 11, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "pool",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 7, adhoc: 1, thinking: 3, coding: 3, detail: 5, trap: 3, score: 52, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 8, adhoc: 2, thinking: 6, coding: 4, detail: 7, trap: 5, score: 64, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 13, adhoc: 2, thinking: 6, coding: 6, detail: 10, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "struct",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 3, adhoc: 3, thinking: 5, coding: 3, detail: 0, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 3, adhoc: 3, thinking: 7, coding: 4, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 3, adhoc: 4, thinking: 9, coding: 6, detail: 5, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 2, graph: 0, combinatorics: 5, adhoc: 6, thinking: 10, coding: 6, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "config",
      parts: [
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 0, thinking: 3, coding: 1, detail: 3, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 1, graph: 0, combinatorics: 6, adhoc: 2, thinking: 4, coding: 2, detail: 4, trap: 0, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 2, graph: 0, combinatorics: 6, adhoc: 3, thinking: 5, coding: 3, detail: 5, trap: 3, score: 44, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 3, graph: 0, combinatorics: 7, adhoc: 4, thinking: 6, coding: 4, detail: 9, trap: 3, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 11, ds: 0, string: 4, graph: 0, combinatorics: 8, adhoc: 4, thinking: 6, coding: 4, detail: 10, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "deserialize",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 6, thinking: 2, coding: 3, detail: 8, trap: 4, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 7, thinking: 4, coding: 3, detail: 9, trap: 4, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 8, thinking: 5, coding: 5, detail: 11, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "client",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 3, detail: 5, trap: 2, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 1, thinking: 4, coding: 4, detail: 11, trap: 5, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 10, ds: 0, string: 0, graph: 8, combinatorics: 0, adhoc: 2, thinking: 5, coding: 5, detail: 11, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "long",
      parts: [
        {
          dp: 1, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 5, ds: 2, string: 4, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 1, detail: 7, trap: 4, score: 48, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 7, ds: 2, string: 5, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 2, detail: 8, trap: 5, score: 72, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 7, ds: 2, string: 5, graph: 0, combinatorics: 0, adhoc: 9, thinking: 7, coding: 4, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delete",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 3, coding: 1, detail: 0, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 7, thinking: 8, coding: 3, detail: 4, trap: 4, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 8, adhoc: 7, thinking: 8, coding: 4, detail: 4, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 8, adhoc: 9, thinking: 9, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 1, coding: 3, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 5, thinking: 2, coding: 4, detail: 7, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 5, thinking: 4, coding: 5, detail: 7, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 10, adhoc: 6, thinking: 6, coding: 5, detail: 10, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "path",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 0, thinking: 2, coding: 3, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 7, adhoc: 1, thinking: 5, coding: 6, detail: 5, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 9, adhoc: 1, thinking: 5, coding: 6, detail: 6, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 13, adhoc: 2, thinking: 6, coding: 6, detail: 10, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "add",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 5, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 11, combinatorics: 0, adhoc: 2, thinking: 6, coding: 3, detail: 7, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 14, combinatorics: 0, adhoc: 2, thinking: 8, coding: 5, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clone",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 4, combinatorics: 0, adhoc: 2, thinking: 3, coding: 4, detail: 5, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 6, combinatorics: 0, adhoc: 4, thinking: 3, coding: 4, detail: 7, trap: 3, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 7, combinatorics: 0, adhoc: 6, thinking: 4, coding: 4, detail: 8, trap: 5, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 9, graph: 8, combinatorics: 0, adhoc: 6, thinking: 7, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "move",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 5, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 4, trap: 3, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 4, trap: 4, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 10, graph: 0, combinatorics: 0, adhoc: 5, thinking: 10, coding: 6, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "protocol",
      parts: [
        {
          dp: 2, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 4, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 2, trap: 4, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 9, string: 4, graph: 0, combinatorics: 0, adhoc: 4, thinking: 9, coding: 4, detail: 5, trap: 4, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 9, string: 4, graph: 0, combinatorics: 0, adhoc: 6, thinking: 10, coding: 4, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrement",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 8, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 10, adhoc: 1, thinking: 6, coding: 4, detail: 2, trap: 5, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 10, adhoc: 2, thinking: 7, coding: 4, detail: 4, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 12, adhoc: 3, thinking: 10, coding: 6, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 2, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 3, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 2, combinatorics: 0, adhoc: 8, thinking: 8, coding: 5, detail: 4, trap: 5, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 2, combinatorics: 0, adhoc: 9, thinking: 11, coding: 6, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delay",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 4, detail: 5, trap: 5, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 12, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 4, detail: 7, trap: 5, score: 72, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 13, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 5, coding: 4, detail: 11, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "schedule",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 3, trap: 0, score: 16, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 4, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 8, coding: 5, detail: 5, trap: 3, score: 64, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 9, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "thread",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 4, graph: 0, combinatorics: 3, adhoc: 3, thinking: 3, coding: 4, detail: 8, trap: 2, score: 44, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 5, graph: 0, combinatorics: 4, adhoc: 6, thinking: 4, coding: 5, detail: 10, trap: 4, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 7, graph: 0, combinatorics: 4, adhoc: 6, thinking: 5, coding: 6, detail: 11, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clock",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 3, trap: 4, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 5, graph: 1, combinatorics: 0, adhoc: 3, thinking: 6, coding: 3, detail: 3, trap: 4, score: 60, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 5, graph: 1, combinatorics: 0, adhoc: 5, thinking: 7, coding: 5, detail: 7, trap: 5, score: 85, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 7, graph: 1, combinatorics: 0, adhoc: 7, thinking: 7, coding: 6, detail: 9, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "node",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 4, graph: 2, combinatorics: 0, adhoc: 2, thinking: 6, coding: 3, detail: 4, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 5, graph: 3, combinatorics: 0, adhoc: 2, thinking: 7, coding: 4, detail: 4, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 6, graph: 7, combinatorics: 0, adhoc: 3, thinking: 8, coding: 6, detail: 5, trap: 4, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 7, graph: 8, combinatorics: 0, adhoc: 4, thinking: 10, coding: 6, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "add",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 2, trap: 5, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 8, combinatorics: 0, adhoc: 5, thinking: 8, coding: 5, detail: 4, trap: 6, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 8, combinatorics: 0, adhoc: 8, thinking: 10, coding: 5, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authorize",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 2, adhoc: 2, thinking: 1, coding: 2, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 5, combinatorics: 5, adhoc: 4, thinking: 4, coding: 4, detail: 5, trap: 3, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 5, combinatorics: 6, adhoc: 5, thinking: 6, coding: 4, detail: 8, trap: 3, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 4, graph: 7, combinatorics: 7, adhoc: 6, thinking: 7, coding: 4, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "object",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 3, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 3, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 11, graph: 0, combinatorics: 0, adhoc: 1, thinking: 8, coding: 3, detail: 4, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 13, graph: 0, combinatorics: 0, adhoc: 4, thinking: 9, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "function",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 4, coding: 1, detail: 2, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 5, coding: 2, detail: 4, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 11, adhoc: 6, thinking: 11, coding: 4, detail: 5, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "offset",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 7, trap: 4, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 5, detail: 9, trap: 4, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 8, thinking: 6, coding: 6, detail: 10, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "limit",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 4, detail: 2, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 5, detail: 2, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 4, thinking: 9, coding: 5, detail: 2, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 9, graph: 0, combinatorics: 0, adhoc: 7, thinking: 10, coding: 5, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "domain",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 2, adhoc: 3, thinking: 3, coding: 3, detail: 4, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 2, adhoc: 4, thinking: 4, coding: 4, detail: 4, trap: 4, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 2, adhoc: 4, thinking: 6, coding: 5, detail: 7, trap: 5, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 8, combinatorics: 2, adhoc: 7, thinking: 7, coding: 6, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 4, graph: 0, combinatorics: 3, adhoc: 3, thinking: 1, coding: 2, detail: 3, trap: 4, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 5, graph: 0, combinatorics: 7, adhoc: 5, thinking: 4, coding: 6, detail: 9, trap: 5, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 5, graph: 0, combinatorics: 8, adhoc: 6, thinking: 6, coding: 6, detail: 10, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "row",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 5, detail: 7, trap: 5, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 10, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 5, detail: 8, trap: 5, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 13, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 5, detail: 11, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "tone",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 2, detail: 3, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 7, coding: 4, detail: 3, trap: 3, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 9, coding: 5, detail: 4, trap: 3, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 12, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 10, coding: 6, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "parameter",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 2, detail: 3, trap: 2, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 6, trap: 5, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 14, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 9, coding: 4, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "directory",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 0, thinking: 2, coding: 2, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 4, adhoc: 1, thinking: 4, coding: 3, detail: 5, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 7, combinatorics: 6, adhoc: 2, thinking: 5, coding: 5, detail: 7, trap: 3, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 9, combinatorics: 10, adhoc: 3, thinking: 6, coding: 5, detail: 10, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "permit",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 4, coding: 2, detail: 7, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 8, adhoc: 3, thinking: 4, coding: 4, detail: 8, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 12, adhoc: 4, thinking: 7, coding: 5, detail: 9, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "batch",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 2, detail: 3, trap: 1, score: 25, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 1, coding: 2, detail: 4, trap: 3, score: 30, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 4, thinking: 2, coding: 2, detail: 8, trap: 3, score: 50, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 8, adhoc: 5, thinking: 4, coding: 4, detail: 8, trap: 5, score: 90, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 12, adhoc: 5, thinking: 6, coding: 4, detail: 10, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "where",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 6, trap: 6, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 5, detail: 7, trap: 6, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 10, graph: 0, combinatorics: 0, adhoc: 5, thinking: 9, coding: 6, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  10: [
    {
      name: "graperm",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 9, combinatorics: 0, adhoc: 4, thinking: 7, coding: 3, detail: 4, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 13, combinatorics: 0, adhoc: 6, thinking: 9, coding: 3, detail: 5, trap: 1, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 15, combinatorics: 0, adhoc: 7, thinking: 10, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "seal",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 2, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 2, coding: 2, detail: 4, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 11, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 5, coding: 2, detail: 4, trap: 2, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 13, ds: 0, string: 0, graph: 0, combinatorics: 9, adhoc: 4, thinking: 6, coding: 2, detail: 4, trap: 5, score: 76, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 16, ds: 0, string: 0, graph: 0, combinatorics: 10, adhoc: 4, thinking: 9, coding: 2, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "point",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 3, trap: 4, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 7, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 5, detail: 3, trap: 6, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 10, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 5, detail: 7, trap: 6, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 14, graph: 0, combinatorics: 0, adhoc: 8, thinking: 12, coding: 5, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "row",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 3, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 3, detail: 2, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 7, thinking: 7, coding: 4, detail: 4, trap: 4, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 1, string: 8, graph: 0, combinatorics: 0, adhoc: 11, thinking: 12, coding: 5, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "add",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 5, adhoc: 4, thinking: 3, coding: 5, detail: 3, trap: 4, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 5, graph: 0, combinatorics: 5, adhoc: 5, thinking: 6, coding: 6, detail: 4, trap: 4, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 7, graph: 0, combinatorics: 8, adhoc: 6, thinking: 10, coding: 6, detail: 8, trap: 5, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 9, graph: 0, combinatorics: 9, adhoc: 8, thinking: 11, coding: 6, detail: 8, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "key",
      parts: [
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 4, thinking: 4, coding: 3, detail: 2, trap: 3, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 1, combinatorics: 6, adhoc: 7, thinking: 5, coding: 3, detail: 5, trap: 3, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 1, combinatorics: 7, adhoc: 9, thinking: 8, coding: 4, detail: 8, trap: 4, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 1, combinatorics: 8, adhoc: 12, thinking: 10, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "directory",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 5, string: 1, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 2, detail: 4, trap: 5, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 6, string: 1, graph: 0, combinatorics: 0, adhoc: 8, thinking: 9, coding: 4, detail: 5, trap: 5, score: 72, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 10, ds: 8, string: 1, graph: 0, combinatorics: 0, adhoc: 8, thinking: 10, coding: 6, detail: 9, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 6, coding: 2, detail: 5, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 0, graph: 0, combinatorics: 4, adhoc: 9, thinking: 8, coding: 4, detail: 9, trap: 6, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 12, string: 0, graph: 0, combinatorics: 5, adhoc: 11, thinking: 9, coding: 4, detail: 10, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "range",
      parts: [
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 5, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 5, coding: 3, detail: 4, trap: 4, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 7, string: 0, graph: 0, combinatorics: 2, adhoc: 7, thinking: 6, coding: 3, detail: 10, trap: 7, score: 80, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 8, ds: 8, string: 0, graph: 0, combinatorics: 2, adhoc: 10, thinking: 7, coding: 6, detail: 12, trap: 8, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "warning",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 6, combinatorics: 7, adhoc: 6, thinking: 4, coding: 4, detail: 4, trap: 5, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 7, combinatorics: 8, adhoc: 8, thinking: 8, coding: 5, detail: 5, trap: 6, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 8, combinatorics: 9, adhoc: 9, thinking: 12, coding: 6, detail: 7, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "float",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 6, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 6, trap: 5, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 12, string: 0, graph: 2, combinatorics: 0, adhoc: 5, thinking: 7, coding: 1, detail: 7, trap: 7, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 13, string: 0, graph: 2, combinatorics: 0, adhoc: 7, thinking: 8, coding: 4, detail: 11, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "check",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 1, adhoc: 5, thinking: 4, coding: 3, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 3, adhoc: 7, thinking: 5, coding: 3, detail: 6, trap: 2, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 12, adhoc: 11, thinking: 10, coding: 4, detail: 9, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "font",
      parts: [
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 6, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 2, trap: 4, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 8, graph: 0, combinatorics: 0, adhoc: 5, thinking: 7, coding: 3, detail: 2, trap: 6, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 9, graph: 0, combinatorics: 0, adhoc: 6, thinking: 9, coding: 3, detail: 4, trap: 6, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 10, graph: 0, combinatorics: 0, adhoc: 7, thinking: 12, coding: 6, detail: 7, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "row",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 3, adhoc: 1, thinking: 3, coding: 2, detail: 3, trap: 3, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 9, adhoc: 3, thinking: 6, coding: 4, detail: 6, trap: 5, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 11, adhoc: 3, thinking: 6, coding: 6, detail: 8, trap: 6, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 17, adhoc: 4, thinking: 7, coding: 6, detail: 12, trap: 8, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "link",
      parts: [
        {
          dp: 0, ds: 3, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 1, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 3, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 3, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 8, trap: 3, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 4, graph: 0, combinatorics: 0, adhoc: 8, thinking: 8, coding: 4, detail: 9, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 5, graph: 0, combinatorics: 0, adhoc: 11, thinking: 9, coding: 6, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "test",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 3, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 4, combinatorics: 0, adhoc: 5, thinking: 3, coding: 2, detail: 4, trap: 4, score: 40, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 9, combinatorics: 0, adhoc: 8, thinking: 8, coding: 4, detail: 7, trap: 7, score: 90, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 11, combinatorics: 0, adhoc: 10, thinking: 12, coding: 6, detail: 7, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "option",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 3, trap: 3, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 8, coding: 3, detail: 6, trap: 7, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 14, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 8, coding: 4, detail: 6, trap: 7, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 17, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 11, coding: 6, detail: 8, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "exception",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 1, combinatorics: 6, adhoc: 2, thinking: 4, coding: 1, detail: 4, trap: 3, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 1, combinatorics: 10, adhoc: 4, thinking: 7, coding: 3, detail: 5, trap: 4, score: 44, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 11, graph: 3, combinatorics: 12, adhoc: 7, thinking: 10, coding: 4, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "slide",
      parts: [
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 4, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 9, graph: 0, combinatorics: 0, adhoc: 7, thinking: 6, coding: 3, detail: 5, trap: 3, score: 56, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 10, graph: 0, combinatorics: 0, adhoc: 8, thinking: 9, coding: 4, detail: 6, trap: 4, score: 64, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 13, graph: 0, combinatorics: 0, adhoc: 10, thinking: 11, coding: 4, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "public",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 5, coding: 4, detail: 4, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 9, adhoc: 5, thinking: 5, coding: 4, detail: 5, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 12, adhoc: 5, thinking: 6, coding: 5, detail: 8, trap: 5, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 16, adhoc: 5, thinking: 8, coding: 6, detail: 11, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 2, combinatorics: 4, adhoc: 5, thinking: 9, coding: 4, detail: 5, trap: 6, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 3, combinatorics: 6, adhoc: 10, thinking: 10, coding: 5, detail: 7, trap: 6, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 4, combinatorics: 7, adhoc: 12, thinking: 12, coding: 5, detail: 7, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "data",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 4, graph: 0, combinatorics: 4, adhoc: 6, thinking: 4, coding: 2, detail: 5, trap: 4, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 6, graph: 0, combinatorics: 7, adhoc: 6, thinking: 6, coding: 3, detail: 7, trap: 4, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 11, graph: 0, combinatorics: 9, adhoc: 9, thinking: 10, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "request",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 2, thinking: 2, coding: 1, detail: 5, trap: 2, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 5, combinatorics: 8, adhoc: 2, thinking: 3, coding: 1, detail: 8, trap: 3, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 11, ds: 0, string: 0, graph: 5, combinatorics: 9, adhoc: 3, thinking: 3, coding: 2, detail: 10, trap: 4, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 13, ds: 0, string: 0, graph: 5, combinatorics: 12, adhoc: 5, thinking: 7, coding: 5, detail: 12, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "filter",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 2, detail: 2, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 5, string: 5, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 2, detail: 4, trap: 4, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 10, string: 10, graph: 0, combinatorics: 0, adhoc: 10, thinking: 10, coding: 4, detail: 9, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "panel",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 3, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 3, combinatorics: 5, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 4, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 5, combinatorics: 9, adhoc: 4, thinking: 6, coding: 2, detail: 5, trap: 6, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 6, combinatorics: 10, adhoc: 7, thinking: 7, coding: 3, detail: 8, trap: 6, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 13, string: 0, graph: 6, combinatorics: 12, adhoc: 7, thinking: 8, coding: 4, detail: 11, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 8, adhoc: 3, thinking: 6, coding: 2, detail: 6, trap: 3, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 14, adhoc: 3, thinking: 10, coding: 2, detail: 7, trap: 4, score: 80, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 16, adhoc: 7, thinking: 10, coding: 4, detail: 9, trap: 6, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "reference",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 4, adhoc: 6, thinking: 4, coding: 2, detail: 6, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 6, string: 0, graph: 0, combinatorics: 6, adhoc: 10, thinking: 8, coding: 4, detail: 7, trap: 5, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 6, string: 0, graph: 0, combinatorics: 8, adhoc: 12, thinking: 9, coding: 4, detail: 10, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sentence",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 4, adhoc: 5, thinking: 4, coding: 4, detail: 2, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 3, graph: 0, combinatorics: 5, adhoc: 6, thinking: 4, coding: 4, detail: 3, trap: 6, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 6, graph: 0, combinatorics: 8, adhoc: 12, thinking: 10, coding: 6, detail: 9, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "buffer",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 3, coding: 4, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 3, adhoc: 6, thinking: 4, coding: 4, detail: 5, trap: 4, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 12, string: 0, graph: 0, combinatorics: 6, adhoc: 9, thinking: 8, coding: 6, detail: 11, trap: 6, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "option",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 12, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 5, thinking: 6, coding: 4, detail: 5, trap: 5, score: 55, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 14, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 8, thinking: 9, coding: 4, detail: 8, trap: 6, score: 90, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 15, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 8, thinking: 10, coding: 4, detail: 9, trap: 8, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 2, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 7, string: 0, graph: 5, combinatorics: 0, adhoc: 7, thinking: 9, coding: 2, detail: 6, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 8, string: 0, graph: 5, combinatorics: 0, adhoc: 9, thinking: 11, coding: 2, detail: 6, trap: 3, score: 64, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 10, string: 0, graph: 7, combinatorics: 0, adhoc: 11, thinking: 12, coding: 4, detail: 7, trap: 7, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "select",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 4, combinatorics: 2, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 4, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 5, thinking: 7, coding: 3, detail: 6, trap: 6, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 8, combinatorics: 4, adhoc: 9, thinking: 9, coding: 5, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "kernel",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 3, trap: 3, score: 16, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 8, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 5, detail: 7, trap: 5, score: 40, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 10, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 6, detail: 11, trap: 5, score: 64, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 14, graph: 0, combinatorics: 0, adhoc: 7, thinking: 7, coding: 6, detail: 12, trap: 8, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "phase",
      parts: [
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 3, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 2, combinatorics: 0, adhoc: 2, thinking: 7, coding: 3, detail: 6, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 11, graph: 4, combinatorics: 0, adhoc: 6, thinking: 10, coding: 5, detail: 8, trap: 4, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 15, graph: 5, combinatorics: 0, adhoc: 7, thinking: 11, coding: 5, detail: 8, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "config",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 5, string: 0, graph: 0, combinatorics: 1, adhoc: 5, thinking: 5, coding: 2, detail: 2, trap: 3, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 6, string: 0, graph: 0, combinatorics: 1, adhoc: 6, thinking: 8, coding: 2, detail: 3, trap: 5, score: 36, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 10, string: 0, graph: 0, combinatorics: 1, adhoc: 9, thinking: 12, coding: 5, detail: 7, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "socket",
      parts: [
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 0, combinatorics: 2, adhoc: 2, thinking: 4, coding: 3, detail: 2, trap: 4, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 14, graph: 0, combinatorics: 3, adhoc: 4, thinking: 8, coding: 5, detail: 7, trap: 4, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 16, graph: 0, combinatorics: 3, adhoc: 5, thinking: 11, coding: 6, detail: 8, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "port",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 3, graph: 0, combinatorics: 5, adhoc: 1, thinking: 3, coding: 2, detail: 4, trap: 2, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 8, ds: 0, string: 5, graph: 0, combinatorics: 12, adhoc: 5, thinking: 7, coding: 4, detail: 7, trap: 7, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 12, ds: 0, string: 6, graph: 0, combinatorics: 12, adhoc: 5, thinking: 9, coding: 5, detail: 10, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "list",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 3, score: 25, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 10, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 2, detail: 7, trap: 6, score: 55, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 5, ds: 10, string: 0, graph: 0, combinatorics: 0, adhoc: 9, thinking: 9, coding: 2, detail: 8, trap: 7, score: 75, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 6, ds: 12, string: 0, graph: 0, combinatorics: 0, adhoc: 11, thinking: 10, coding: 4, detail: 9, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "node",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 2, coding: 1, detail: 2, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 4, thinking: 3, coding: 3, detail: 5, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 9, adhoc: 5, thinking: 4, coding: 3, detail: 8, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 12, adhoc: 11, thinking: 7, coding: 4, detail: 12, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "value",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 0, graph: 4, combinatorics: 4, adhoc: 6, thinking: 8, coding: 3, detail: 7, trap: 5, score: 56, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 0, graph: 7, combinatorics: 6, adhoc: 6, thinking: 8, coding: 4, detail: 9, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 0, graph: 9, combinatorics: 11, adhoc: 7, thinking: 9, coding: 5, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "translate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 6, combinatorics: 0, adhoc: 5, thinking: 3, coding: 1, detail: 6, trap: 3, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 10, combinatorics: 0, adhoc: 6, thinking: 4, coding: 3, detail: 6, trap: 6, score: 44, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 14, combinatorics: 0, adhoc: 6, thinking: 5, coding: 3, detail: 9, trap: 6, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 15, combinatorics: 0, adhoc: 8, thinking: 8, coding: 4, detail: 11, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clone",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 9, thinking: 4, coding: 3, detail: 3, trap: 5, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 11, thinking: 10, coding: 4, detail: 4, trap: 5, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 11, thinking: 12, coding: 6, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "color",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 8, string: 0, graph: 8, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 5, trap: 6, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 9, string: 0, graph: 10, combinatorics: 0, adhoc: 5, thinking: 7, coding: 3, detail: 10, trap: 7, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 12, string: 0, graph: 12, combinatorics: 0, adhoc: 6, thinking: 7, coding: 4, detail: 12, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "cluster",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 4, adhoc: 4, thinking: 5, coding: 3, detail: 4, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 12, combinatorics: 5, adhoc: 7, thinking: 7, coding: 4, detail: 7, trap: 8, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 15, combinatorics: 6, adhoc: 8, thinking: 12, coding: 4, detail: 7, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "index",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 2, coding: 1, detail: 2, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 4, coding: 2, detail: 4, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 9, adhoc: 7, thinking: 7, coding: 3, detail: 5, trap: 7, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 10, adhoc: 10, thinking: 9, coding: 4, detail: 6, trap: 8, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 11, adhoc: 10, thinking: 9, coding: 6, detail: 10, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "light",
      parts: [
        {
          dp: 0, ds: 3, string: 2, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 4, graph: 3, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 1, trap: 4, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 8, graph: 3, combinatorics: 0, adhoc: 4, thinking: 6, coding: 2, detail: 5, trap: 6, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 12, string: 10, graph: 3, combinatorics: 0, adhoc: 4, thinking: 7, coding: 3, detail: 9, trap: 6, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 12, string: 13, graph: 3, combinatorics: 0, adhoc: 5, thinking: 10, coding: 5, detail: 9, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "graphic",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 4, thinking: 4, coding: 4, detail: 4, trap: 3, score: 35, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 11, adhoc: 7, thinking: 7, coding: 5, detail: 10, trap: 5, score: 75, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 13, adhoc: 8, thinking: 9, coding: 6, detail: 10, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 1, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 3, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 5, string: 5, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 6, detail: 7, trap: 4, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 7, string: 8, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 6, detail: 9, trap: 5, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 13, string: 11, graph: 0, combinatorics: 0, adhoc: 4, thinking: 7, coding: 6, detail: 12, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "rotate",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 2, coding: 2, detail: 4, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 8, thinking: 6, coding: 3, detail: 6, trap: 5, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 10, thinking: 7, coding: 3, detail: 7, trap: 7, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 13, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 10, thinking: 9, coding: 4, detail: 10, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "format",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 6, coding: 3, detail: 4, trap: 5, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 0, graph: 0, combinatorics: 3, adhoc: 7, thinking: 8, coding: 4, detail: 6, trap: 7, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 0, graph: 0, combinatorics: 3, adhoc: 11, thinking: 12, coding: 5, detail: 7, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "parse",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 0, string: 4, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 8, ds: 0, string: 5, graph: 4, combinatorics: 0, adhoc: 5, thinking: 4, coding: 3, detail: 6, trap: 4, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 8, ds: 0, string: 6, graph: 4, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 8, trap: 8, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 10, ds: 0, string: 12, graph: 4, combinatorics: 0, adhoc: 7, thinking: 7, coding: 4, detail: 12, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "duplicate",
      parts: [
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 2, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 5, coding: 4, detail: 2, trap: 4, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 6, coding: 5, detail: 3, trap: 5, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 16, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 6, thinking: 12, coding: 5, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "alloc",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 3, coding: 4, detail: 4, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 0, combinatorics: 0, adhoc: 8, thinking: 4, coding: 5, detail: 4, trap: 3, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 13, string: 0, graph: 0, combinatorics: 0, adhoc: 9, thinking: 8, coding: 5, detail: 11, trap: 8, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "trigger",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 2, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 2, trap: 3, score: 30, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 6, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 4, trap: 4, score: 55, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 9, graph: 0, combinatorics: 0, adhoc: 12, thinking: 10, coding: 6, detail: 9, trap: 8, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "shell",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 7, adhoc: 3, thinking: 3, coding: 4, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 3, combinatorics: 9, adhoc: 4, thinking: 5, coding: 5, detail: 7, trap: 5, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 0, graph: 3, combinatorics: 9, adhoc: 5, thinking: 6, coding: 5, detail: 9, trap: 6, score: 90, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 12, string: 0, graph: 6, combinatorics: 9, adhoc: 7, thinking: 8, coding: 6, detail: 11, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "panel",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 2, thinking: 2, coding: 1, detail: 3, trap: 3, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 2, thinking: 5, coding: 3, detail: 9, trap: 4, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 5, adhoc: 5, thinking: 6, coding: 5, detail: 10, trap: 4, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 9, adhoc: 7, thinking: 7, coding: 5, detail: 10, trap: 7, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 11, adhoc: 10, thinking: 9, coding: 6, detail: 10, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "effect",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 3, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 7, coding: 4, detail: 3, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 5, thinking: 8, coding: 5, detail: 6, trap: 5, score: 36, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 11, thinking: 12, coding: 6, detail: 7, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "split",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 4, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 5, combinatorics: 0, adhoc: 3, thinking: 4, coding: 1, detail: 5, trap: 3, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 14, string: 0, graph: 5, combinatorics: 0, adhoc: 7, thinking: 7, coding: 6, detail: 12, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "axis",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 4, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 2, detail: 4, trap: 4, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 7, graph: 0, combinatorics: 1, adhoc: 6, thinking: 6, coding: 2, detail: 5, trap: 6, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 9, graph: 0, combinatorics: 2, adhoc: 9, thinking: 9, coding: 5, detail: 10, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "case",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 3, coding: 2, detail: 6, trap: 3, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 6, adhoc: 9, thinking: 6, coding: 3, detail: 10, trap: 6, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 8, adhoc: 12, thinking: 7, coding: 6, detail: 12, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "offset",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 2, adhoc: 3, thinking: 6, coding: 2, detail: 3, trap: 3, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 3, adhoc: 4, thinking: 8, coding: 2, detail: 4, trap: 3, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 12, graph: 0, combinatorics: 5, adhoc: 10, thinking: 11, coding: 5, detail: 8, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "file",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 9, graph: 6, combinatorics: 0, adhoc: 5, thinking: 4, coding: 2, detail: 8, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 9, string: 11, graph: 6, combinatorics: 0, adhoc: 6, thinking: 7, coding: 4, detail: 9, trap: 4, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 10, string: 12, graph: 6, combinatorics: 0, adhoc: 6, thinking: 7, coding: 5, detail: 12, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "slide",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 4, thinking: 6, coding: 6, detail: 5, trap: 4, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 3, graph: 8, combinatorics: 0, adhoc: 5, thinking: 8, coding: 6, detail: 7, trap: 6, score: 80, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 10, ds: 0, string: 3, graph: 11, combinatorics: 0, adhoc: 7, thinking: 9, coding: 6, detail: 10, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "host",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 3, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 6, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 6, detail: 6, trap: 4, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 7, graph: 0, combinatorics: 0, adhoc: 9, thinking: 5, coding: 6, detail: 7, trap: 5, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 11, graph: 0, combinatorics: 0, adhoc: 10, thinking: 9, coding: 6, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "protocol",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 7, thinking: 4, coding: 2, detail: 4, trap: 1, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 8, adhoc: 9, thinking: 6, coding: 2, detail: 5, trap: 4, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 10, adhoc: 10, thinking: 7, coding: 3, detail: 9, trap: 4, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 11, adhoc: 11, thinking: 9, coding: 5, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "domain",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 2, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 5, thinking: 5, coding: 2, detail: 6, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 9, adhoc: 6, thinking: 6, coding: 3, detail: 7, trap: 3, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 11, adhoc: 8, thinking: 9, coding: 4, detail: 7, trap: 7, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 13, adhoc: 10, thinking: 11, coding: 4, detail: 8, trap: 7, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "graphic",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 3, detail: 2, trap: 3, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 5, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 10, trap: 5, score: 56, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 6, combinatorics: 0, adhoc: 9, thinking: 7, coding: 5, detail: 11, trap: 8, score: 72, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 0, graph: 9, combinatorics: 0, adhoc: 9, thinking: 8, coding: 5, detail: 11, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "value",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 3, detail: 3, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 6, thinking: 3, coding: 4, detail: 7, trap: 5, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 8, thinking: 6, coding: 5, detail: 9, trap: 6, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 12, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 9, thinking: 7, coding: 6, detail: 12, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "multiply",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 6, thinking: 3, coding: 4, detail: 6, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 9, graph: 0, combinatorics: 0, adhoc: 10, thinking: 4, coding: 5, detail: 11, trap: 5, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 12, graph: 0, combinatorics: 0, adhoc: 10, thinking: 7, coding: 5, detail: 12, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "info",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 6, combinatorics: 0, adhoc: 5, thinking: 5, coding: 4, detail: 4, trap: 4, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 10, combinatorics: 0, adhoc: 5, thinking: 6, coding: 5, detail: 5, trap: 5, score: 36, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 12, combinatorics: 0, adhoc: 6, thinking: 6, coding: 5, detail: 8, trap: 6, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 15, combinatorics: 0, adhoc: 7, thinking: 7, coding: 5, detail: 12, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pattern",
      parts: [
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 3, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 3, coding: 3, detail: 6, trap: 4, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 7, coding: 5, detail: 7, trap: 4, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 13, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 8, thinking: 9, coding: 6, detail: 10, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "content",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 5, thinking: 2, coding: 4, detail: 5, trap: 4, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 8, combinatorics: 0, adhoc: 9, thinking: 5, coding: 4, detail: 9, trap: 5, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 0, graph: 11, combinatorics: 0, adhoc: 9, thinking: 9, coding: 4, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "channel",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 2, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 5, adhoc: 5, thinking: 4, coding: 3, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 9, combinatorics: 5, adhoc: 8, thinking: 5, coding: 4, detail: 7, trap: 6, score: 85, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 12, combinatorics: 5, adhoc: 10, thinking: 7, coding: 5, detail: 12, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "option",
      parts: [
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 3, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 5, graph: 0, combinatorics: 5, adhoc: 3, thinking: 5, coding: 3, detail: 7, trap: 5, score: 36, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 7, graph: 0, combinatorics: 6, adhoc: 4, thinking: 7, coding: 3, detail: 11, trap: 6, score: 64, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 9, graph: 0, combinatorics: 6, adhoc: 6, thinking: 7, coding: 6, detail: 12, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "buffer",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 2, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 5, combinatorics: 0, adhoc: 4, thinking: 3, coding: 2, detail: 4, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 8, combinatorics: 0, adhoc: 10, thinking: 4, coding: 3, detail: 6, trap: 4, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 11, combinatorics: 0, adhoc: 11, thinking: 8, coding: 5, detail: 11, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "reduce",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 1, detail: 4, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 8, thinking: 7, coding: 3, detail: 6, trap: 3, score: 44, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 10, thinking: 9, coding: 5, detail: 8, trap: 5, score: 64, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 0, string: 6, graph: 0, combinatorics: 1, adhoc: 12, thinking: 11, coding: 6, detail: 8, trap: 7, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "clock",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 8, adhoc: 4, thinking: 8, coding: 4, detail: 5, trap: 2, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 11, adhoc: 9, thinking: 11, coding: 4, detail: 8, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 13, adhoc: 10, thinking: 11, coding: 4, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "error",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 7, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 5, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 10, combinatorics: 0, adhoc: 8, thinking: 10, coding: 3, detail: 7, trap: 7, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 13, combinatorics: 0, adhoc: 9, thinking: 12, coding: 5, detail: 7, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "permit",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 3, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 5, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 8, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 5, detail: 6, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 13, string: 0, graph: 0, combinatorics: 0, adhoc: 8, thinking: 8, coding: 6, detail: 11, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "expand",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 5, trap: 2, score: 40, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 12, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 6, thinking: 7, coding: 2, detail: 9, trap: 6, score: 85, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 15, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 8, thinking: 8, coding: 4, detail: 11, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "photo",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 3, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 3, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 7, string: 0, graph: 2, combinatorics: 0, adhoc: 8, thinking: 10, coding: 3, detail: 8, trap: 6, score: 60, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 9, ds: 10, string: 0, graph: 4, combinatorics: 0, adhoc: 9, thinking: 10, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "join",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 3, thinking: 0, coding: 1, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 4, graph: 0, combinatorics: 3, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 4, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 8, graph: 0, combinatorics: 3, adhoc: 6, thinking: 4, coding: 2, detail: 7, trap: 6, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 10, graph: 0, combinatorics: 4, adhoc: 6, thinking: 4, coding: 3, detail: 10, trap: 6, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 12, ds: 0, string: 13, graph: 0, combinatorics: 4, adhoc: 6, thinking: 7, coding: 4, detail: 12, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "view",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 1, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 5, graph: 0, combinatorics: 2, adhoc: 8, thinking: 7, coding: 3, detail: 7, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 5, graph: 0, combinatorics: 4, adhoc: 9, thinking: 7, coding: 3, detail: 7, trap: 7, score: 85, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 6, graph: 0, combinatorics: 5, adhoc: 12, thinking: 11, coding: 5, detail: 8, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "point",
      parts: [
        {
          dp: 1, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 3, string: 4, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 6, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 5, string: 8, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 4, detail: 7, trap: 3, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 12, ds: 6, string: 13, graph: 0, combinatorics: 0, adhoc: 5, thinking: 11, coding: 6, detail: 8, trap: 7, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 3, score: 16, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 6, score: 28, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 9, string: 1, graph: 6, combinatorics: 0, adhoc: 3, thinking: 6, coding: 2, detail: 6, trap: 6, score: 56, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 12, string: 2, graph: 11, combinatorics: 0, adhoc: 6, thinking: 7, coding: 2, detail: 7, trap: 7, score: 72, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 12, string: 5, graph: 13, combinatorics: 0, adhoc: 7, thinking: 9, coding: 4, detail: 10, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "list",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 3, string: 0, graph: 6, combinatorics: 0, adhoc: 6, thinking: 4, coding: 3, detail: 3, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 4, string: 0, graph: 8, combinatorics: 0, adhoc: 9, thinking: 7, coding: 4, detail: 4, trap: 6, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 5, string: 0, graph: 8, combinatorics: 0, adhoc: 11, thinking: 9, coding: 5, detail: 10, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "process",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 1, detail: 4, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 8, thinking: 9, coding: 2, detail: 8, trap: 4, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 11, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 10, thinking: 11, coding: 2, detail: 8, trap: 4, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 12, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 10, thinking: 11, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "update",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 5, thinking: 8, coding: 4, detail: 3, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 9, thinking: 10, coding: 4, detail: 5, trap: 5, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 10, graph: 0, combinatorics: 0, adhoc: 12, thinking: 12, coding: 5, detail: 7, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "hardware",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 4, combinatorics: 4, adhoc: 5, thinking: 5, coding: 3, detail: 5, trap: 5, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 8, graph: 4, combinatorics: 9, adhoc: 6, thinking: 7, coding: 3, detail: 8, trap: 5, score: 48, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 11, graph: 6, combinatorics: 13, adhoc: 6, thinking: 9, coding: 6, detail: 10, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "domain",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 8, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 5, trap: 4, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 12, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 7, trap: 7, score: 55, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 15, combinatorics: 0, adhoc: 6, thinking: 5, coding: 3, detail: 8, trap: 8, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 17, combinatorics: 0, adhoc: 6, thinking: 8, coding: 4, detail: 11, trap: 8, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "status",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 6, adhoc: 3, thinking: 5, coding: 2, detail: 1, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 11, adhoc: 8, thinking: 6, coding: 4, detail: 6, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 14, adhoc: 9, thinking: 11, coding: 4, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transition",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 3, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 5, adhoc: 4, thinking: 3, coding: 4, detail: 3, trap: 4, score: 40, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 9, adhoc: 7, thinking: 8, coding: 4, detail: 7, trap: 7, score: 80, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 12, adhoc: 11, thinking: 9, coding: 4, detail: 10, trap: 7, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "label",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 5, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 4, coding: 2, detail: 5, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 6, string: 0, graph: 0, combinatorics: 4, adhoc: 7, thinking: 5, coding: 2, detail: 8, trap: 3, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 10, ds: 12, string: 0, graph: 0, combinatorics: 4, adhoc: 9, thinking: 10, coding: 4, detail: 9, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "delay",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 3, score: 25, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 2, coding: 5, detail: 5, trap: 3, score: 40, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 0, adhoc: 10, thinking: 4, coding: 5, detail: 9, trap: 7, score: 80, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 9, string: 0, graph: 1, combinatorics: 0, adhoc: 12, thinking: 7, coding: 6, detail: 12, trap: 8, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "select",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 11, adhoc: 3, thinking: 3, coding: 2, detail: 8, trap: 5, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 14, adhoc: 5, thinking: 5, coding: 2, detail: 9, trap: 8, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 16, adhoc: 6, thinking: 7, coding: 5, detail: 12, trap: 8, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "title",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 5, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 5, trap: 5, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 5, graph: 7, combinatorics: 0, adhoc: 4, thinking: 9, coding: 4, detail: 6, trap: 6, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 9, graph: 12, combinatorics: 0, adhoc: 8, thinking: 11, coding: 5, detail: 8, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "long",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 6, string: 0, graph: 0, combinatorics: 0, adhoc: 5, thinking: 3, coding: 2, detail: 4, trap: 6, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 11, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 2, detail: 8, trap: 6, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 16, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 9, coding: 4, detail: 10, trap: 7, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 3, trap: 4, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 13, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 4, thinking: 8, coding: 4, detail: 6, trap: 5, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 17, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 5, thinking: 10, coding: 5, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "function",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 5, adhoc: 3, thinking: 5, coding: 3, detail: 5, trap: 3, score: 35, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 7, adhoc: 7, thinking: 7, coding: 3, detail: 6, trap: 4, score: 55, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 10, adhoc: 12, thinking: 9, coding: 5, detail: 10, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "merge",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 3, thinking: 3, coding: 2, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 1, adhoc: 3, thinking: 7, coding: 2, detail: 3, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 10, combinatorics: 1, adhoc: 3, thinking: 8, coding: 3, detail: 5, trap: 4, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 13, combinatorics: 4, adhoc: 9, thinking: 11, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "exception",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 3, detail: 3, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 6, coding: 4, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 6, detail: 5, trap: 3, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 16, string: 6, graph: 0, combinatorics: 0, adhoc: 5, thinking: 12, coding: 6, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "increment",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 0, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 6, thinking: 3, coding: 3, detail: 6, trap: 4, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 8, adhoc: 8, thinking: 5, coding: 4, detail: 8, trap: 4, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 10, adhoc: 8, thinking: 9, coding: 4, detail: 8, trap: 7, score: 80, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 12, adhoc: 11, thinking: 11, coding: 4, detail: 8, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    }
  ]
}
