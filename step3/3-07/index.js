// console.log('Helloworld')



// 攻撃の数値だけダメージ与える
// モンスターの攻撃が０以下になるまで繰り返す

// 体力１００のモンスター
let enemy = 100;
let attack;
let count = 0;

window.alert('戦闘スタート');

// モンスターの攻撃が０以下になるまで繰り返す
while(enemy > 0){
  // 攻撃一回につき３０以下、毎回ランダム
  attack = Math.floor(Math.random() * 30)+1;
  console.log('モンスターに'+ attack + 'のダメージ');
  // ダメージ換算
  enemy -= attack;
  count++;
}

console.log(count + '回でモンスターを倒した！！')
