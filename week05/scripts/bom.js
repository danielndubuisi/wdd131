const input = document.querySelector('input');
const list = document.querySelector('ul');
const btn = document.querySelector('button');

const displayList = (item) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    li.textContent = item;
    deleteBtn.textContent = "❌";
    li.append(deleteBtn);
    list.append(li);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

const setChapterList = (chapters) => {
    localStorage.setItem('chapters', JSON.stringify(chapters));
}

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('chapters'));
}

const deleteChapter = (chapter) => {
    // gets rid of the last character, which is the X button
    chapter = chapter.slice(0, chapter.length - 1);
    // redefine chapters array
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    // update localStorage
    setChapterList(chaptersArray);
}

btn.addEventListener('click', () => {
    // checks if input is not empty
    if (input.value.trim() !== '') {
        // display value
        displayList(input.value);

        // push to array
        chaptersArray.push(input.value);

        // update localStorage
        setChapterList(chaptersArray);

        input.value = "";
        input.focus();
    }
});

// working with localStorage
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => displayList(chapter));
