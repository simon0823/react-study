import React, {Component} from 'react';

// 클래스형 컴포넌트
class Name extends Component {
    static defaultProps = {
        name : 'undefined'
    };
    render() {
        return (
            <div>Hello! my name is <b>{this.props.name}</b></div>
        );
    }
}

// 함수형 컴포넌트
// 주의할 점 : 함수형 컴포넌트에선 Line 1의 Component 를 extends 하지 않기 떄문에 Line 1의 {Component}를 제거해주어야 함
// const Name = ({name}) => {
//     return (
//         <div>Hello! my name is <b>{name}</b></div>
//     );
// };
//
// Name.defaultProps = {
//     name : 'undefined'
// };

export default Name;