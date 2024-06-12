# QA Proof Vowel Count (Beta)

#### You have the simple task to write a function that

#### returns the number (`count`) of vowels in the given string.

#### We will consider `a`, `e`, `i`, `o`, `u` as vowels for this Kata (but not `y`).

#### However you have an overzealous QA department. Be sure to pass all their tests!

```javascript
describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
  it("should return 5 for 'abrAcadAbra'",function(){
    assert.strictEqual(getCount("abrAcadAbra"), 5) ;
  });
  it("should return 0 for ",function(){
    assert.strictEqual(getCount(),0) ;
  });
  it("should return 4 for undefined",function(){
    assert.strictEqual(getCount(undefined),4) ;
  });
  it("should return 1 for null",function(){
    assert.strictEqual(getCount(null),1);
  });
  it("should return 1 for []",function(){
    assert.strictEqual(getCount([]),0);
  });
  it("should return 4 for [undefined]",function(){
    assert.strictEqual(getCount([undefined]),4);
  });
  it("should return 3 for Infinity",function(){
    assert.strictEqual(getCount(Infinity),3);
  });
  it("should return 4 for Infinity,null",function(){
    assert.strictEqual(getCount(Infinity,null),4);
  });
  it("should return 0 for {}",function(){
    assert.strictEqual(getCount({}),0);
  });
  it("should return 3 for new Map([[ 1, 'one' ],[ 2, 'two' ]]",function(){
    assert.strictEqual(getCount(new Map([[ 1, 'one' ],[ 2, 'two' ]])),3);
  });
  it("should return 2 for Symbol('foo')",function(){
    assert.strictEqual(getCount(Symbol('foo')),2);
  });
  it("should return 1 for (async()=>'asdf')()",function(){
    assert.strictEqual(getCount((async()=>'asdf')()),1);
  });  
  it("should return 4 for /chicken mcnuggets/",function(){
    assert.strictEqual(getCount(/chicken mcnuggets/),4);
  }); 
});
```

## Link to this kata
### Click [here](https://www.codewars.com/kata/66632bb164aa7b6cc8437dde/train/javascript)