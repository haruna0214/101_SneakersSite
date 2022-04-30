'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');


  // クリックしたら処理してねの指示
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
    // hideクラスを作成してマテリアルアイコン開いた時にアイコン（閉）の後ろに透ける（開）マークをなくすため
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

// {
// function phoneCall() {
//   if (window.confirm('TEL：0120-000-000に発信しますか？')) {
//     location.href = 'tel:0120000000';
//   } else {
//     window.alert('発信がキャンセルされました');
//   }
// }

// <button onclick="phoneCall()">電話をかける</button>
// }
