
$("#container , .back-Button, #dragonballInfo, #narutoInfo, #aotInfo").hide();

$("#start").fadeOut(1500, function(){
    $("#container").fadeIn(500);
});


$(".instructions").click(function(){
    $(".instructions").fadeOut(500,function(){
      $(".back-Button").fadeIn(500,function(){
          $(".instructions").hide();
      }); 
    });
});


$(".back-Button").click(function(){
    $(".back-Button").fadeOut(500,function(){
      $(".instructions").fadeIn(500,function(){
          $(".back-Button, #dbzInfo, #narutoInfo, #aotInfo").hide();
      });
    });
});


$("#dbz").click(function(){
    $(".instructions").fadeOut(500,function(){
      $("#dbzInfo").fadeIn(500,function(){
          $(".instructions, #narutoInfo, #aotInfo").hide();
      });
    });
});
 
$("#naruto").click(function(){
    $(".instructions").fadeOut(500,function(){
      $("#narutoInfo").fadeIn(500,function(){
          $(".instructions, #aotInfo, #dbzInfo").hide();
      });
    });
});

$("#aot").click(function(){
    $(".instructions").fadeOut(500,function(){
      $("#aotInfo").fadeIn(500,function(){
          $(".instructions, #narutoInfo, #dbzInfo").hide();
      });
    });
});





var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 9;
camera.position.y = 2;
camera.position.x = 4;

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'),antialias: true, precision: 'mediump'});
renderer.setClearColor("#78a0f0");
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth , window.innerHeight);



var controls = new THREE.OrbitControls(camera,renderer.domElement);





const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( ambientLight );

var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 300, 0 );
scene.add( hemiLight );

var dirLight = new THREE.DirectionalLight( 0xffffff );
dirLight.position.set( 75, 300, -75 );
scene.add( dirLight );

var hey = new THREE.MeshPhysicalMaterial({ transmission: 1, thickness: 1, roughness: 0.65 })

var loader = new THREE.GLTFLoader();
    var fox;
    loader.load( 'models/cute_kitsune_fox/scene.gltf', ( gltf ) => {
    fox = gltf.scene;
    fox.scale.set(1,1,1);
    fox.position.x = 6;
    scene.add(hey);         
	scene.add( fox );
});






const dbzButton = document.getElementById('dbz');
dbzButton.addEventListener('click', function handleDBZ() {
    console.log('dbz clicked');

    
    var loaderDBZ = new THREE.GLTFLoader();

    var kameHouse;
    loaderDBZ.load('models/kame_house/kame.gltf', ( gltf ) =>{
        kameHouse = gltf.scene;
        scene.clear();
        renderer.setClearColor("#38f5ff");
        camera.position.z = 13;
        camera.position.y = 4;
        kameHouse.position.x = 8;
        scene.add( ambientLight );
        scene.add( hemiLight );
        scene.add( dirLight );
        scene.add(kameHouse);

    })


    loaderDBZ2 = new THREE.GLTFLoader();
    var buu;
    loaderDBZ2.load('models/majin_buu/scene.gltf', (gltf) =>{
        buu = gltf.scene;

        buu.scale(.1, .1);

        scene.add(buu);

        buu.position.y = 7;
    })
});



const narutoButton = document.getElementById('naruto');
narutoButton.addEventListener('click', function handleNaruto() {
    console.log('naruto clicked');
    

    var loaderNaruto = new THREE.GLTFLoader();

    var ichiraku;
    loaderNaruto.load('models/ichiraku_ramen_-_naruto/scene.gltf', ( gltf ) =>{
        ichiraku = gltf.scene;
        
        scene.clear();
        renderer.setClearColor("#BEB7DF");
        camera.position.z = 13;
        camera.position.y = 4;
        scene.add( ambientLight );
        scene.add( dirLight );
        scene.add( hemiLight );
        scene.add(ichiraku);

    })
});

 

const aotButton = document.getElementById('aot');
aotButton.addEventListener('click', function handleAOT() {
    console.log('AOT clicked');
    

    var loaderAOT = new THREE.GLTFLoader();

    var aot;
    loaderAOT.load('models/aot_erens_home_low-poly/aot.gltf', ( gltf ) =>{
        aot = gltf.scene;
        
        scene.clear();
        renderer.setClearColor("#ffe59e");
        camera.position.z = 15;
        camera.position.y = 5;
        scene.add( ambientLight );
        scene.add( dirLight );
        scene.add( hemiLight );
        scene.add(aot);

    })
});















window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth * .7, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});













function animate(){
    requestAnimationFrame(animate);
    render(fox);
}

function render(){
    renderer.render(scene,camera);
}

animate();