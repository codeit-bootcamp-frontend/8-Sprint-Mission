const userEmail = document.querySelector(".user-email");
const userName = document.querySelector(".user-name");
const userPassword = document.querySelector(".user-password");
const userPasswordChk = document.querySelector(".user-password-chk");
const passwordBtn = document.querySelector(".password-btn");
const passwordBtnChk = document.querySelector(".password-btn-chk");
const submitBtn = document.querySelector(".submit-btn");
submitBtn.disabled = true; // 회원가입 버튼 비활성화

function btnFail() {
	submitBtn.disabled = true; // 회원가입&로그인 버튼 비활성화
	submitBtn.classList.remove("on"); // 회원가입&로그인 버튼 활성화 css 삭제
}

userEmail.addEventListener("focusout", (e) => { // 이메일 input에서 focusout 될 경우 실행
	const userEmailVal = e.target.value.split(" ").join(""); // split(" ").join("")으로 value 띄어쓰기 삭제
	const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 유효성 검사 정규식
	
	if(userEmailVal === "") { // 이메일 값이 공백일 때
		e.target.className = "fail"; // input에 빨간선 추가
		e.target.nextElementSibling.textContent = "이메일을 입력해주세요."; // input 하단에 경고 문자 추가
		e.target.nextElementSibling.classList.add("on"); // input 하단 경고 문자 영역 노출
		btnFail()
	} else if (!emailTest.test(userEmailVal)) { // 이메일 값이 공백은 아니지만 이메일 형식에 맞지 않을 때
		e.target.className = "fail";
		e.target.nextElementSibling.textContent = "잘못된 이메일 형식입니다.";
		e.target.nextElementSibling.classList.add("on");
		btnFail()
	} else { // 이메일 정상적으로 입력할 때
		e.target.className = "good"; // input 빨간선 삭제
		e.target.nextElementSibling.textContent = ""; // input 하단 경고 문자 삭제
		e.target.nextElementSibling.classList.remove("on"); // input 하단 경고 문자 영역 미노출
		btnAble(); // 버튼 활성화 가능한지 검사하는 기능
	}
});

if(userName) {
	userName.addEventListener("focusout", (e) => { // 닉네임 input에서 focus 될 경우 실행
		let userNameVal = e.target.value.split(" ").join(""); // split(" ").join("")으로 value 띄어쓰기 삭제
	
		if(userNameVal === "") { // 닉네임 값이 공백일 때
			e.target.className = "fail";
			e.target.nextElementSibling.textContent = "닉네임을 입력해주세요.";
			e.target.nextElementSibling.classList.add("on");
			btnFail()
		} else { // 닉네일을 정상적으로 입력했을 때
			e.target.className = "good";
			e.target.nextElementSibling.textContent = "";
			e.target.nextElementSibling.classList.remove("on");
			btnAble(); // 버튼 활성화 가능한지 검사하는 기능
		}
	})
}

userPassword.addEventListener("focusout", (e) => { // 비밀번호 input에서 focusout 될 경우 실행
	const userPasswordVal = e.target.value.split(" ").join(""); // split(" ").join("")으로 value 띄어쓰기 삭제

	if(userPasswordVal === "") { // 비밀번호 값이 공백일 때
		e.target.className = "fail";
		e.target.nextElementSibling.textContent = "비밀번호 입력해주세요.";
		e.target.nextElementSibling.classList.add("on");
		btnFail()
	} else if(userPasswordVal.length < 8) { // 비밀번호가 8자리 미만일 때
		e.target.className = "fail";
		e.target.nextElementSibling.textContent = "비밀번호 8자 이상 입력해주세요.";
		e.target.nextElementSibling.classList.add("on");
		btnFail()
	} else { // 비밀번호를 정상적으로 입력할 때
		e.target.className = "good";
		e.target.nextElementSibling.textContent = "";
		e.target.nextElementSibling.classList.remove("on");
		btnAble(); // 버튼 활성화 가능한지 검사하는 기능
	}
});

if(userPasswordChk) {
	userPasswordChk.addEventListener("focusout", (e) => { // 비밀번호 확인 input에서 focusout 될 경우 실행
		const userPasswordChkVal = e.target.value.split(" ").join(""); // split(" ").join("")으로 value 띄어쓰기 삭제
		
		if(userPasswordChkVal === "") { // 비밀번호 값이 공백일 때
			e.target.className = "fail";
			e.target.nextElementSibling.textContent = "비밀번호 일치하지 않습니다.";
			e.target.nextElementSibling.classList.add("on");
			btnFail()
		} else if(userPassword.value !== userPasswordChkVal) { // 비밀번호 값이 일치 하지 않을 때
			e.target.className = "fail";
			e.target.nextElementSibling.textContent = "비밀번호 일치하지 않습니다.";
			e.target.nextElementSibling.classList.add("on");
			btnFail()
		} else { // 비밀번호를 정상적으로 입력할 때
			e.target.className = "good";
			e.target.nextElementSibling.textContent = "";
			e.target.nextElementSibling.classList.remove("on");
			btnAble(); // 버튼 활성화 가능한지 검사하는 기능
		}
	})
}

passwordBtn.addEventListener("click", (e) => { // 비밀번호 온오프 버튼 기능
	let passwordBtnImg = passwordBtn.firstChild; // 비밀번호 온오프 이미지

	if(userPassword.getAttribute("type") !== "password") { // 비밀번호 input type가 password가 아닐경우
		userPassword.setAttribute("type", "password"); // input type를 password로 변경
		passwordBtnImg.setAttribute("src", "images/i-password-off.png") // 온오프 이미지를 오프로 변경
	} else { // 비밀번호 input type가 password
		userPassword.setAttribute("type", "text"); // input type를 text로 변경
		passwordBtnImg.setAttribute("src", "images/i-password-on.png") // 온오프 이미지를 온으로 변경
	}
})

if(passwordBtnChk) {
	passwordBtnChk.addEventListener("click", (e) => { // 비밀번호 확인 온오프 버튼 기능
		let passwordBtnImg = passwordBtnChk.firstChild; // 비밀번호 확인 온오프 이미지
	
		if(userPasswordChk.getAttribute("type") !== "password") { // 비밀번호 확인 input type가 password가 아닐경우
			userPasswordChk.setAttribute("type", "password"); // input type를 password로 변경
			passwordBtnImg.setAttribute("src", "images/i-password-off.png") // 온오프 이미지를 오프로 변경
		} else { // 비밀번호 확인 input type가 password
			userPasswordChk.setAttribute("type", "text"); // input type를 text로 변경
			passwordBtnImg.setAttribute("src", "images/i-password-on.png") // 온오프 이미지를 온으로 변경
		}
	})
}

if(userName && userPasswordChk && passwordBtnChk) {
	function btnAble() { // 로그인 버튼 활성화 여부 
		const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 유효성 검사 정규식
		const emailVal = emailTest.test(userEmail.value.split(" ").join("")); // value 띄어쓰기 삭제하고 정규식으로 이메일 유효성 검사
		const nameVal = userName.value.split(" ").join("") !== "";
		const passwordVal = userPassword.value.split(" ").join("").length > 7; // value 띄어쓰기 삭제하고 길이가 8자리 이상인지 검사
		const passwordChkVal = userPasswordChk.value === userPassword.value;
	
		if(emailVal && nameVal && passwordVal && passwordChkVal) { // 이메일도 정상적으로 입력하고 비밀번호도 8자리 이상일경우
			submitBtn.disabled = false;
			submitBtn.classList.add("on");
		} else { // 이메일 비밀번호 둘다 조건에 맞지 않을 경우
			btnFail()
		}
	}

	submitBtn.addEventListener("click", () => { // 회원가입 버튼 클릭시 로그인 페이지로 이동
		window.location.href = "login.html";
	})
} else {
	function btnAble() { // 로그인 버튼 활성화 여부 
		const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 유효성 검사 정규식
		const emailVal = emailTest.test(userEmail.value.split(" ").join("")); // value 띄어쓰기 삭제하고 정규식으로 이메일 유효성 검사
		const passwordVal = userPassword.value.split(" ").join("").length > 7; // value 띄어쓰기 삭제하고 길이가 8자리 이상인지 검사
	
		if(emailVal && passwordVal) { // 이메일도 정상적으로 입력하고 비밀번호도 8자리 이상일경우
			submitBtn.disabled = false;
			submitBtn.classList.add("on")
		} else { // 이메일 비밀번호 둘다 조건에 맞지 않을 경우
			btnFail()
		}
	}
	
	submitBtn.addEventListener("click", () => { // 로그인 버튼 클릭시 items.html 페이지로 이동
		window.location.href = "items.html";
	})
}