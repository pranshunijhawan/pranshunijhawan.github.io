(function() {
	var old = console.log;
	var logger = document.getElementById('log');
	console.log = function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'object') {
				logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
			} else {
				logger.innerHTML += arguments[i] + '<br />';
			}
		}
	}
})();

document.getElementById('submit').addEventListener('click', function() {
	submit();
})

function textAreaAdjust() {
	const element = document.getElementById('input-code');
	const logObject = document.getElementById('log');

	if (logObject.scrollHeight < element.scrollHeight) {
		element.style.height = "1px";
		element.style.height = (1 + element.scrollHeight) + "px";
		logObject.style.height = element.style.height;
	} else {
		element.style.height = logObject.scrollHeight + "px";
	}
}

document.addEventListener('keydown', function(event) {
	const inputObj = document.getElementById('input-code');
	const code = inputObj.value;
	if (event.ctrlKey && event.key === "Enter" && !!code) {
		submit();
	}
});

function submit() {
	var logger = document.getElementById('log');
	logger.style.height = null;
	logger.style.backgroundColor = 'var(--container-color)';
	logger.innerHTML = '';
	const inputObj = document.getElementById('input-code');
	const code = inputObj.value;
	try {
		eval(code);
	} catch (error) {
		console.log(error.toString());
	}
	const codeSectionObj = document.getElementById('input-code');
	codeSectionObj.style.height = logger.scrollHeight + "px";
}

document.getElementById('clear').addEventListener('click', clear);

function clear() {
	const codeBlockObj = document.getElementById('input-code');
	codeBlockObj.value = '';
	const resultBlockObj = document.getElementById('log');
	resultBlockObj.innerHTML = '';
	resultBlockObj.style.backgroundColor = 'var(--body-color)';
	codeBlockObj.style.height = '5rem';
	textAreaAdjust();
}

document.getElementById('input-code').addEventListener('paste', textAreaAdjust);