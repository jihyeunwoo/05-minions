window.addEventListener("DOMContentLoaded", function(){
	setTimeout(showAfterLoad, 3000);
					
	const POPUP = document.querySelector("#popup");
	const BODY = document.querySelector("#body");
	const CLOSE = document.querySelector("#close");
				
	function showAfterLoad(){
 		/*console.log(popupOuter);	// .log : 콘솔에 출력명령*/
		//console.dir(popupOuter);	// 대상의 객체에 정보를 탐색
		popupOuter.style.display = "block";
					
// 		console.dir(BODY);
		BODY.style.overflow = "hidden";
		}
		
	CLOSE.addEventListener("click", function(){
		POPUP.style.display = "none";
		BODY.style.overflow = "auto";
	})
	
	//.prev 버튼 누르면 현재 캐러셀 이미지 I -> II의 위치로 조작
	const PREV = document.querySelector(".prev");
	const NEXT = document.querySelector(".next");
	const POSTS = document.querySelector("#posts")
	
	let postIndex = 0;
	
	
	PREV.addEventListener("click", function(){
		postIndex--;
		
		postIndex < 0 ? postIndex = 2  : null;
		
		console.log(postIndex);
		
		let coords = -920 * postIndex;
		
		POSTS.style.marginLeft = coords+"px";
	})
	
	NEXT.addEventListener("click", function(){
		postIndex++;
		
		postIndex < 3 ? postIndex = 0 : null;
		let coords = -920 * postIndex;
		
		POSTS.style.marginLeft = coords+"px";
		//캐러셀 옮기기
		// 현재 : 0 x-920 = 0		다음 : 1 x -920 = -920	다다음 : 2 x 920 = -1840
		
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
	