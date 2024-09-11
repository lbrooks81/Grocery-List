const listElement = document.getElementById('grocery-list');
let promptValue = prompt('Enter the number of items for your grocery list')

while(isNaN(parseInt(promptValue)))
{
    console.log(parseInt(promptValue));
    promptValue = prompt('Please enter the number of items for your grocery list');
}

document.title =`${promptValue} Grocery Item`;
if(promptValue > 1)
{
    document.title += 's'
}

const itemHeader = document.getElementById('item-header');
itemHeader.textContent = itemHeader.textContent + promptValue;

for(let i = 0; i < promptValue; i++)
{
    let newRow = document.createElement('li');
    listElement.appendChild(newRow);

    newRow.style.listStyleType = 'disc';

    if(i % 2 !== 0)
    {
        newRow.style.backgroundColor = 'lightgray';
    }

    newRow.textContent = prompt(`Enter item ${i + 1}`);


}

