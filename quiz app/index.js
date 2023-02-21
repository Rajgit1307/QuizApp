const question = [
  {
    que: "which of following is markup language?",
    a: "css",
    b: "html",
    c: "js",
    d: "php",
    correct: "b",
  },
  {
    que: "which year js was introduced?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "what does the css stand for?",
    a: "markup language",
    b: "casecading style",
    c: "javascript",
    d: "c++",
    correct: "b",
  },
];
let index = 0;
let total = question.length;
let right = 0,
  wrong = 0;
let quebox = document.getElementById("quebox");
let option = document.querySelectorAll(".option");
let submit = document.querySelector(".btn");
const loadquestion = () => {
  if (index === total) {
    return end();
  }
  reset();
  const data = question[index];
  quebox.innerText = `${index + 1}) ${data.que}`;
  option[0].nextElementSibling.innerText = data.a;
  option[1].nextElementSibling.innerText = data.b;
  option[2].nextElementSibling.innerText = data.c;
  option[3].nextElementSibling.innerText = data.d;
};

const submitquiz = () => {
  const data = question[index];
  const ans = getAns();
  console.log(ans,data.correct)
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestion();

  
};

const getAns = () => {
  let ans;
  option.forEach(
    (input) => {
        if (input.checked) {
             ans = input.value;
      
    }
  });
  return ans;
};

const reset = () => {
  option.forEach((input) => {
    input.checked = false;
  });
};

const end = () => {
  document.querySelector(".box").innerHTML = `
    <div style = "text-align:center">
        <h3>thanku for playing the quiz</h3>
        <h2>${right} / ${total} are correct</h2>
    </div>
    `
}

loadquestion();
