const btn = document.querySelector('.share-btn');

const shareItemList = document.querySelector('.share-items')
const shareItemContainer = document.querySelector('.share-items-container');

   btn.addEventListener('click',function (){
      shareItemContainer.classList.toggle('share-item-animation');
      shareItemList.classList.toggle('share-item-animation');
      shareItemList.classList.toggle('d-flex');
   });

  
  