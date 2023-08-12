document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let code = "[";
    var data = document.querySelector('textarea').value.split('\n');
    console.log(data)
    if(data[0] === ''){
        alert('textarea is empty');
    }else{
        const main = data[0].split(',');
        data.shift();
        data.forEach((item, index) => {
            const itemElements = item.split(',');
            if(itemElements.length === main.length){
                for(let i = 0; i < main.length; i++){
                    if(i === 0){
                        code += "{";
                    }
                    code += `${main[i]}: ${itemElements[i]}`;
                    if(i === (main.length - 1)){
                        if(index === (data.length - 1)){
                            code += "}]";
                            break;
                        }
                        code += "}, ";
                    }else{
                        code += ", ";
                    }
                }

                document.querySelector('p').innerText = code;
            }else{
                alert('input is not valid');
            }
        })
    }
})