let test: string = "1";

//타입을 변수로 선언
type me_type = {
    name: string;
    age: number;
    where: string;
};
let me: me_type = {
    name: "yoon",
    age: 32,
    where: "seceret",
};

//object형
let singer: { title: string; singer: string } = {
    title: "안녕나의사랑",
    singer: "성시경",
};

let project: { member: string[]; days: number; started: boolean } = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};

//타입지정해보기1
let user: string = "kim";
let age: undefined = undefined;
let married: boolean = false;
let 철수: (string|undefined|boolean)[] = [user, age, married];

//타입지정해보기2
let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
} = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
