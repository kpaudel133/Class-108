    
    function startDances(){
        navigator.mediaDevices.getUserMedia({audio: true});
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/s54_tLZjb/model.json', modelReady);

    }

    function modelReady(){
        classifier.classify(gotResult);
    }

    function gotResult(error, result){
        if (error){
            console.error(error);
        }

        else{
            console.log(result);

            red = Math.floor(Math.random() * 255) + 1;
            green = Math.floor(Math.random() * 255) + 1;
            blue = Math.floor(Math.random() * 255) + 1;

            document.getElementById("result_sound").innerHTML = "I can hear - " + result[0].label;
            document.getElementById("accuracy").innerHTML = "Accuracy - " + (result[0].confidence * 100).toFixed(2) + "%";
            document.getElementById("result_sound").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
            document.getElementById("accuracy").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";

            img1 = document.getElementById("alien1");
            img2 = document.getElementById("alien2");
            img3 = document.getElementById("alien3");
            img4 = document.getElementById("alien4");

            if(result[0].label == "Snapping"){
                img1.src = "aliens-01.gif";
                img2.src = "aliens-02.png";
                img3.src = "aliens-03.png";
                img4.src = "aliens-04.png";
            }

            else if(result[0].label == "Background Noise"){
                img1.src = "aliens-01.png";
                img2.src = "aliens-02.gif";
                img3.src = "aliens-03.png";
                img4.src = "aliens-04.png";
            }

            else if(result[0].label == "Clapping"){
                img1.src = "aliens-01.png";
                img2.src = "aliens-02.png";
                img3.src = "aliens-03.gif";
                img4.src = "aliens-04.png";
            }

            else{
                img1.src = "aliens-01.png";
                img2.src = "aliens-02.png";
                img3.src = "aliens-03.png";
                img4.src = "aliens-04.gif";
            }
        }
    }