window.addEventListener("DOMContentLoaded", function(){
	setTimeout(showAfterLoad, 3000);
					
	const POPUP = document.querySelector("#popup");
	const BODY = document.querySelector("#body");
	const CLOSE = document.querySelector("#close");
				
	function showAfterLoad(){
// 		console.log(popupOuter);	// .log : 콘솔에 출력명령
		//console.dir(popupOuter);	// 대상의 객체에 정보를 탐색
		popupOuter.style.display = "block";
					
// 		console.dir(BODY);
		BODY.style.overflow = "hidden";
		}
		
	CLOSE.addEventListener("click", function(){
		POPUP.style.display = "none";
		BODY.style.overflow = "auto";
	})
					
})
				
		
		
		
		
// 			$(function(){
// 				$("#close").click(function(){
// 					setTimeout(showAfterLoad, 3000);
// 					function showAfterLoad(){
// 						$("#popup").css("display","block");
// 						$("body").css("overflow", "hidden");
// 					}
// 					//#popup을 감춰/사라지게해줘/보이지 않게 해줘
// 					$("#popup").css("display","none");
// 					$("body").css("overflow", "auto");
// 				})
// 			})
	