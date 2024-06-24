# Dashatize It (6 kyu)

## Description

### Given an integer, return a string with dash `'-'` marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

```javascript
274 -> '2-7-4'
6815 -> '68-1-5'
```







doTest(274, "2-7-4");
      doTest(5311, "5-3-1-1");
      doTest(86320, "86-3-20");
      doTest(974302, "9-7-4-3-02");
    });

    it('Weird', () => {
      doTest(0, "0");
      doTest(-1, "1");
      doTest(-28369, "28-3-6-9");
    });