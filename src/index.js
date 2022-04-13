//var let const
var val1 = "val変数";
console.log(val1);

const val4 = {
  name: "テスト",
  age: 22
};

val4.name = "jake";
val4.address = "Hiroshima";

console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

//template 文字列
const name = "John";
const age = 11;

const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

//allow function
const func1 = (str) => {
  return str;
};
console.log(func1("fun1 allow function."));

const func2 = (str) => str;
console.log(func2("func2 allow function."));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(2, 3));

//Destructuring assignment 分割代入
const myProfile = {
  name: "asano",
  age: 20
};
const message2 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message2);

const yourProfile = ["hoge", 33];
const message3 = `私の名前は${yourProfile[0]}です。年齢は${yourProfile[1]}です。`;
console.log(message3);

const [yourname, yourage] = yourProfile;
const message4 = `私の名前は${yourname}です。年齢は${yourage}です。`;
console.log(message4);

//spread 構文(...)

//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1); //1
console.log(num2); //2
console.log(arr3); //3,4,5

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

//map filter
const nameArr = ["田中", "山田", "佐藤"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(`${i + 1}番目は${nameArr[i]}です`);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2);

nameArr.map((name) => console.log(name));
nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です`));

const numArr = [1, 2, 3, 4, 5, 6];
const newNumArrr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArrr);

const newNameArr2 = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr2);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(30, 50));
