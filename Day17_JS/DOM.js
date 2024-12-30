//============================DOM=================//
console.log([document]);
document.title = "ES6 & DOM"

// const HandleSubmit = () =>
// {
//     // const tagH1 = document.getElementById("text");
//     // console.log([tagH1]);
//     // tagH1.style.color = "red";
//     // tagH1.style.fontSize = "40px"
// };

const ProductItem = {
    name : "Iphone",
    price : 1000,
    origin : "Apple"
}

const btnSubmit = document.getElementById("btnSubmit");
console.log([btnSubmit]);

// btnSubmit.onclick = () =>
// {
//     const {name,price,origin} = ProductItem
//     const demoId = document.getElementById("text");
//     console.log([demoId]);
//      demoId.style.color = "red";
//     demoId.style.fontSize = "40px"
//     demoId.innerHTML =   `
//          <p> Name ${name} </p>
//          <p> Price ${price} </p>
//          <p> Origin ${origin} </p>

//     `
// };
`
//Cách 2`
btnSubmit.onclick = () =>
{  
    const ProductItem = {
        name : "Iphone",
        price : 1000,
        origin : "Apple"
    }
    renderdata(ProductItem);
};
const renderdata = (item) =>
{
    const {name,price,origin} = ProductItem;
    const demoId = document.getElementById("text");
    console.log([demoId]);
     demoId.style.color = "red";
    demoId.style.fontSize = "40px"
    demoId.innerHTML =   `
         <p> Name ${name} </p>
         <p> Price ${price} </p>
         <p> Origin ${origin} </p>

    `
  
}

//innerText chỉ viết được một cái text
//innerHtml có thể viết một DOM một HTML vào bên trong có thể thay đổi mọt content hoặc một html

const demoClass = document.getElementsByClassName("democlass");
console.log(demoClass,'demoClass');

for(let index = 0 ;index <demoClass.length;index++)
{
    console.log(index);
    if(index %2 === 0)
    {
        demoClass[index].style.color = "red";
        demoClass[index].style.fontSize = "40px"
    }
    else
    {
        demoClass[index].style.color = "green";
    }
    demoClass[index].innerText = `This is tag ${index}`;
};

// tag name
const tagname = document.getElementsByTagName("p");
console.log(tagname,'tagname');

for(let index = 0 ;index <tagname.length;index++)
{
    console.log(index);
    if(index %2 === 0)
    {
        tagname[index].style.color = "red";
        tagname[index].style.fontWeight = "bold  "
    }
    else
    {
        tagname[index].style.color = "green";
    }
    tagname[index].innerText = `This is tag p ${index}`;
};
// selector tổng hợp vừa sử dụng id class tagname tổng hợp  chỉ tìm kiếm elelment phần tử đầu tiên thỏa mản

const p = document.querySelector("p")
{
    console.log(p);
}
// selector All tìm kiếm tất cả thoait mản
const p1 = document.querySelectorAll("p")
{
    console.log(p1);
}
p1.forEach(item =>
    {
        item.className = "active"
    });

    // ==== form
    // const userName = document.getElementById("userName");
    // console.log([userName]);
    // userName.value = "huy"

    const userName = document.getElementById("userName");
    const listGender = document.querySelectorAll('[type="radio"][name = "gender"]')
    const HandleLogin = () =>
    {
        // value = > type : text , select,number , date 
        console.log(listGender);
        let sex = "";
        listGender.forEach(gender =>
        {
             if(gender.checked)
             {
                sex = gender.value;
             }
        })
        const disPlay = document.getElementById("display");
         disPlay.innerHTML =   `
         <p>Name:<span id='name'>${userName.value}</span></p>
         <p>Gender:<span id="gender">${sex}</span></p>

         `
        console.log(userName.value);
    }
    const reset = () =>
    {
        userName.value =  "";
        console.log(listGender);
        listGender.forEach(item =>
            {
                item.checked = false;
            });
    }
    const edit  = () =>
    {
         const name = document.getElementById("name");
         const gender = document.getElementById("gender");
         console.log(gender.innerText);
         listGender.forEach (item =>
            {
               if(item.value === gender.innerText)
               {
                item.checked = true;
               }
               else
               {
                item.checked = false;
               }
            });
         console.log(name.innerText);
         userName.value = name.innerText;

    }
// radio quan tâm value checked = true