function ShowSelectedData(){
    var show = document.database.play.value;
    if(show==1){
        document.write('<img src="1.jpg" width="500" height="700"><br><h3>◇あらすじ</h3><br><h4>人気のない惑星のお屋敷に<br>女の子と二人の従者だけが<br>暮らしておりました。<br>ほかに誰かやってきても<br>みんなお嬢様に追い出されてしまうのです。<br>あぁ<br>噂をすれば<br>それでは失礼させていただきます<br>お客様をお待たせするわけにはいきませんからね。</h4><br><h3>◇原案</h3><br><h4>瀧岡美咲</h4><br><h3>◇脚本</h3><br><h4>白石響</h4><br><h3>◇演出</h3><br><h4>頃末龍</h4><br><h3>◇出演</h3><br><h4>境大軌・村上航・本岡万侑・山本静香</h4>' );
    }
    else if(show==2){
        document.write('<img src="2.jpg" width="500" height="700"><h3>◇あらすじ</h3><br><h4><子供の頃からの親友だったぬいぐるみを母に捨てられてしまったハルマは友達のいない高校二年生。母を心配させないため、日々友達を作ろうと試行錯誤するハルマの前にある日謎の男が現れてこう言った。「君の願いを叶えてあげる」そこから始まるハルマの短い夏の物語。<br></h4><br>');
    }
    else if(show==3){
        document.write('<img src="3.jpg" width="500" height="700">');
    }
}