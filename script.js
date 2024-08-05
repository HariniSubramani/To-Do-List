document.getElementById('moon').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  function taskadded() {
    let input = document.getElementById("inputvalue");
    let lc = document.getElementById("listcontainer");
    if (input.value == '') {
      alert("Enter the task please!!!!");
    } else {
      let li = document.createElement('li');
      li.innerHTML = input.value;
      let sp = document.createElement("span");
      sp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">  
   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>  
  </svg>`;
      li.append(sp);
      lc.append(li);
    }
    input.value = '';  
  }
  document.getElementById('listcontainer').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');  
    } else if (e.target.tagName === 'SPAN' || e.target.closest('span')) {  
      e.target.closest('li').remove();
    }
  }, false);