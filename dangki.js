const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small')
	small.innerText = message
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
	small.innerText = ''
}

// Check email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Email không hợp lệ')
	}
}

// Check required fields
function checkRequired(inputArr) {
	let isRequired = false
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} không được bỏ trống`)
			isRequired = true
		} else {
			showSuccess(input)
		}
	})

	return isRequired
}

// Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} không được ít hơn ${min} kí tự`
		)
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} không thể nhiều hơn ${max} kí tự`
		)
	} else {
		showSuccess(input)
	}
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Mật khẩu không khớp')
	}
}

// check checkbox tick
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener("click", function(){
	checkbox.classList.toggle('Ok');
	checkTicker()
})
function checkTicker(){
	if(checkbox.classList.contains("Ok")){
		document.getElementById('error').style.display = 'none'
	}
	else{
		document.getElementById('error').style.display = 'block'
	}
}

// Get fieldname
function getFieldName(input) {
	return input.title
	// return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([username, email, password, password2])) {
		checkLength(username, 3, 15)
		checkLength(password, 6, 25)
		checkEmail(email)
		checkPasswordsMatch(password, password2)
	}
	checkTicker()
})
//Show password
const eyeTitle1 = document.querySelector('.eye1');
const eyeTitle2 = document.querySelector('.eye2');
var Eye1 = document.getElementById('mat1');
var Eye2 =document.getElementById('mat2');
eyeTitle1.addEventListener("click", function(){
	eyeTitle1.classList.toggle("show");
   	Eye1.classList.toggle("fa-eye-slash");
    Eye1.classList.toggle("fa-eye");
    if(eyeTitle1.classList.contains("show")){
        document.getElementById('password').type = 'text';    
    }
    else{
        document.getElementById('password').type = 'password';
    }
})
eyeTitle2.addEventListener("click", function(){
	eyeTitle2.classList.toggle("show");
   	Eye2.classList.toggle("fa-eye-slash");
    Eye2.classList.toggle("fa-eye");
    if(eyeTitle2.classList.contains("show")){
        document.getElementById('password2').type = 'text';    
    }
    else{
        document.getElementById('password2').type = 'password';
    }
})
