import React from "react";
import PropTypes from 'prop-types'

type CalcPropsType = {
    x: number;
    y : number;
    oper : string;
};

const Calc = (props : CalcPropsType) => {
    let result : number = 0;
    switch (props.oper){
        case "+" :
            result = props.x + props.y
            break;
        case "*" :
            result = props.x * props.y
            break;
        default :
            result = 0        
    }

    return (
        <div>
            <h3>연산 방식 : {props.oper}</h3>
            <hr />
            <div>
                {props.x} {props.oper} {props.y} = {result}
            </div>
        </div>
    )
}

const calcChecker = (props: any, propName : string, componentName : string) => {
    if(propName === "oper"){
        if(props[propName] !== "+" && props[propName] !== "*"){
            return new Error(`${propName}속성의 값은 
            반드시 '+', '*'만 허용합니다(at ${componentName}).`);
        }
    }
    if(propName === "y"){
        let y = props[propName]; // 전달값[속성 이름]
        if(y > 100 || y < 0 || y%2 !== 0){
            return new Error(`${propName}속성의 값은 
            0이상 100이하의 짝수만 허용합니다.(at ${componentName}).`);
        }
    }
};

//유효성 검증 정보
Calc.propTypes = {
    x : PropTypes.number.isRequired, //어떤 타입인지 필수인지.
    y: calcChecker, //사용자 정의 함수로 유효성 체크 
    oper : calcChecker, //
};

Calc.defaultProps = {
    x : 100,
    y : 20,
    oper : "+",
}

export default Calc;