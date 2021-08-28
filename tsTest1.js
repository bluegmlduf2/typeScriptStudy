var test = "1";
var me = {
    name: "yoon",
    age: 32,
    where: "seceret",
};
//object형
var singer = {
    title: "안녕나의사랑",
    singer: "성시경",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
//타입지정해보기1
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
//타입지정해보기2
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
