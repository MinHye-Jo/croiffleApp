import { useState } from "react";

// 유효성 및 인터페이스 모델 hook
const validateHook = () => {
	const [model, setModel] = useState({});
	const isVaildate = (key) => key ? model[key] : !Object.keys(model).find(o => !model[o]);

	return [model, isVaildate];
}


export default validateHook;