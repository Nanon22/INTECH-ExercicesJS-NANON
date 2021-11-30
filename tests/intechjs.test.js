import { contains } from "../scripts/fonctions/contains"
import { deepEqual } from "../scripts/objets/deep_equal"
import { diff } from "../scripts/objets/diff"
import { dump } from "../scripts/objets/dump"
import { split } from "../scripts/fonctions/split"
import { customObj } from "../scripts/objets/forEachOwnProperty"
import { startWith } from "../scripts/fonctions/startWith"
import { padLeft, padSpaces, padZeros } from "../scripts/fonctions/padLeft"
import { padRight } from "../scripts/fonctions/padRight"
import { initWith, from42, fromZero } from "../scripts/objets/init_with"
import { initWithZeros, initFrom, withZero } from "../scripts/objets/init_with_hof"
import { restrict } from "../scripts/objets/restrict"
import { compose } from "../scripts/fonctions/compose"
import { partial } from "../scripts/fonctions/partial"
import { EZArray } from "../scripts/classes/ez-array"
import { Range, Span } from "../scripts/classes/range"
import { hanoi } from "../scripts/fonctions/hanoi"
import { filter } from "../scripts/iterators/filter"
import { hanoi_recgen } from "../scripts/iterators/hanoi_recgen"




test('diff function', () => {
  let o1 = { r: 0, g: 0, b: 0, a: 0 };
  let withoutOpacity = { a: null };
  let objectWithoutOpacity = diff(o1, withoutOpacity); 
  expect(o1 === objectWithoutOpacity).toBe(false);
  expect(deepEqual(objectWithoutOpacity, { r: 0, g: 0, b: 0 })).toBe(true);
});

test('contains function', () => {
  expect(contains('keep moving forward !', 'moving', 0)).toBe(5);
  expect(contains('keep moving forward !', 'moving', 6)).toBe(-1);
});

test('split function', () => {
  expect(deepEqual(split("Bonjour, je m'appelle Jean !", " "), ["Bonjour,", "je", "m'appelle", "Jean", "!"])).toBe(true);
  expect(deepEqual(split("I'm reading a wooden book.", "oo"),["I'm reading a w", "den b", "k."])).toBe(true);
});

test('start with function', () => {
  expect(startWith("Et demain matin, j'te fais des gaufres au sucre !!", "Et demain")).toBe(true);
  expect(startWith("Les ogres c'est comme les oignons.", "Ça schlingue ?")).toBe(false);
});



test('pads function', () => {
  expect(padLeft("0", "123", 6)).toBe("000123");
  expect(padRight(" ", "45", 8)).toBe("45      ");
  expect(padZeros("11011", 8)).toBe("00011011");
  expect(padSpaces("11011", 8)).toBe("   11011");
});


test('deep equal function', () => {

  const a1 = [1, 2, [3, 4], 5];
  const a2 = JSON.parse(JSON.stringify(a1)); 
  
  expect(a1 === a2).toBe(false);
  expect(deepEqual(a1, a2)).toBe(true);
});

test('init with function', () => {
  expect(deepEqual(initWith(5, withZero), [0, 0, 0, 0, 0])).toBe(true);
  expect(deepEqual(initWith(5, fromZero), [0, 1, 2, 3, 4])).toBe(true);
  expect(deepEqual(initWith(5, from42), [42, 43, 44, 45, 46])).toBe(true);
});

test('init with hof function', () => {
  
  expect(deepEqual(initWithZeros(3), [0, 0, 0])).toBe(true);
  expect(deepEqual(initFrom(3, 42), [42, 43, 44])).toBe(true);
});

test('for each own function', () => {
  const o1 = new customObj();
  o1.a = 1

  const o2 = Object.create(o1);
  o2.b = 2;
  o2.c = 3;

  const props = [];
  o2.forEachOwnProperty(prop => props.push(prop));
  
  expect(deepEqual(props, ["b", "c"])).toBe(true);
  expect(deepEqual(initFrom(3, 42), [42, 43, 44])).toBe(true);
});


test('dump function', () => {
  let obj = {};
  obj.firstname = "Alan";
  obj.lastname = "Turing";
  obj.birthday = [1921, 6, 23];
  expect(dump(obj)).toBe('{\n'+
    '    firstname : "Alan",\n' + 
    '    lastname : "Turing",\n' + 
    '    birthday : [1921, 6, 23]\n' +
  '}');
});

test('restrict function', () => {
  
  const config = { user: "user", pass: "pass" };
  const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };

  expect("vars" in tooMuchConfig).toBe(true);
  expect("env" in tooMuchConfig).toBe(true);

  const properConfig = restrict(tooMuchConfig, config);
  
  expect(properConfig === config).toBe(false);
  expect("vars" in properConfig).toBe(false);
  expect("env" in properConfig).toBe(false);
});

test('compose function', () => {
  
  const increment = x => x + 1;
  const double = y => y * 2;
  const timesTwoPlusOne = compose(increment, double);
  
  expect(timesTwoPlusOne(5)).toBe(11);
});

test('partial function', () => {
  
  const f = (x, y, z) => x * (y - z);
  
  
  expect(partial(f, 2)(3, 4)).toBe(-2);
});

test('Hanoi function', () => {
  
  hanoi(3,1,3);
  
});

test('EZArray class', () => {
  
  let a = new EZArray();
  expect(a instanceof EZArray).toBe(true);
  expect(a instanceof Array).toBe(true);

  a.push(1,2,3,4);      // a.length == 4; méthodes hérités

  expect(a.length).toBe(4);
  expect(a.pop()).toBe(4);
  expect(a.first).toBe(1);
  expect(a.last).toBe(3);
  expect(a[1]).toBe(2);
  expect(Array.isArray(a)).toBe(true);
  expect(EZArray.isArray(a)).toBe(true);
});

test('Range class', () => {
  
  let r = new Range(2, 8);
  let rString = "(2...8)";
  expect(Range.integerRangePattern.test(rString)).toBe(true);
  expect(r.includes(4)).toBe(true);
  expect(r.toString()).toBe(rString);
  expect(rString).toBe(new Range(2, 8).toString());
  
});

test('Span class', () => {
  
  let s1 = new Span(2, 4);
  let s2 = new Span(12, -8);
  expect(s1.toString()).toBe("(2...6)");
  expect(s2.toString()).toBe("(4...12)");
  
});

test('Filter generator', () => {
  
  const iterator = filter("hello", v => "aeiouy".includes(v));
  expect(iterator.next().value).toBe("e");
  expect(iterator.next().value).toBe("o");
  expect(iterator.next().done).toBe(true);
  
});

test('Hanoi generator', () => {
  
  const steps = [];
  for (let step of [...hanoi_recgen(3, 1, 3)]) {
      steps.push(step);
  }

  expect(deepEqual(steps, [
    { f: 1, t: 3 }, { f: 1, t: 2 }, { f: 3, t: 2 },
    { f: 1, t: 3 }, { f: 2, t: 1 }, { f: 2, t: 3 },
    { f: 1, t: 3 }
])).toBe(true);
  
});




