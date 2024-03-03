import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteTryItem(inputText);
}

const createIncompleteTryItem = (tryItem) => {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "try-item";
  p.innerText = tryItem;

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const moveTarget = completeButton.closest("li");
    console.log(moveTarget);
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    // 戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      const tryItemText = backButton.previousElementSibling.innerText;
      createIncompleteTryItem(tryItemText);
      backButton.closest("li").remove();
    });

    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  })

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // console.log(li);
  // console.log(div);
  // console.log(p);

  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
