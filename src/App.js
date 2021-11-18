import React, { Component } from 'react';
import Button from './input-button'
import Text from './input-text'
var couter=1;
class App extends Component {
    constructor() {
        super();
        this.state={
            string:""
        }
    }
    handleButton(e){
        if (e.target.value!==undefined){
            let instring=e.target.value;
            let prvcontent=this.state.string;
            let content="";
            if (instring==="+"||instring==="-"||instring==="*"||instring==="/"){
                content=prvcontent+" "+instring+" ";
            }
            else if (instring==="Theme"){
                // content="功能未开放";
                var bodyColor=['#3a4764','#e6e6e6','#17062a'];
                var mainBoderColor=['black','#aa9f96','#7f1d96'];
                var mainColor=['#3a4764','#e6e6e6','#17062a'];
                var inputButtonColor=['#252d44','#d3cdcd','#1e0836'];
                var inputContentBorderColor=['#aa9f96','#aa9f96','#491262'];
                var inputTextColor=['#172032','#eeeeee','#1e0836'];
                var inputTextFontColor=['#fff','#37372d','#fce341'];
                var inputButtonSameColor=['#e9e4db','#e6e6e6','#331b4d'];
                var inputButtonSameFontColor=['#000','#37372d','#fce341'];
                var inputButtonChildFontColor=['#fff','#37372d','#fce341'];
                var inputButtonChildColor=['#637397','#388187','#56077c'];
                var inputButtonEqualFontColor=['#fff','#f0ddc1','#000'];
                var inputButtonEqualColor=['#d04130','#c85401','#00decf'];
                var inputButtonBorderColor=['#9c9690','#aa9f96','#7f1d96'];

                document.getElementsByTagName('body')[0].style.setProperty('--bodyColor',bodyColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--mainBoderColor',mainBoderColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--mainColor',mainColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputButtonColor',inputButtonColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputContentBorderColor',inputContentBorderColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputTextColor',inputTextColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputTextFontColor',inputTextFontColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputButtonSameColor',inputButtonSameColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputButtonSameFontColor',inputButtonSameFontColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputButtonChildFontColor',inputButtonChildFontColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputButtonChildColor',inputButtonChildColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputButtonEqualFontColor',inputButtonEqualFontColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputButtonEqualColor',inputButtonEqualColor[couter]);
                document.getElementsByTagName('body')[0].style.setProperty('--inputButtonBorderColor',inputButtonBorderColor[couter]);
                couter=(couter+1)%3;

            }
            else if (instring==="RESET"){
                content="";
            }
            else if (instring==="DEL"){
                if(prvcontent[prvcontent.length-1]===" " && prvcontent[prvcontent.length-3]===" ")
                    prvcontent=prvcontent.slice(0,prvcontent.length-3);
                else
                    prvcontent=prvcontent.slice(0,prvcontent.length-1);
                content=prvcontent;
            }
            else if (instring==="="){
                let arr=prvcontent.split(" ");
                let ans=[];
                let i=0;
                while (i<arr.length){
                    if (arr[i]==="")
                        i++;
                    else if (arr[i]==="+"){
                        ans.push(arr[i+1]);
                        i+=2;
                    }
                    else if (arr[i]==="-"){
                        ans.push(-arr[i+1]);
                        i+=2;
                    }
                    else if (arr[i]==="*"){
                        let a;
                        let b=ans.pop();
                        if(arr[i+1]==="-"){
                            a=-arr[i+2];
                            i+=3;
                        }
                        else {
                            a=arr[i+1];
                            i+=2;
                        }
                        ans.push(b*a);
                    }
                    else if (arr[i]==="/"){
                        let a;
                        let b=ans.pop();
                        if (arr[i+1]==="0"){
                            content="ERROR!";
                            return;
                        }
                        else if(arr[i+1]==="-"){
                            a=-arr[i+2];
                            i+=3;
                        }
                        else {
                            a=arr[i+1];
                            i+=2;
                        }
                        ans.push(b/a);
                    }
                    else {
                        ans.push(arr[i]);
                        i++;
                    }

                }
                // console.log(ans);
                let fin_ans=parseFloat(ans[0]);
                for (i=1;i<ans.length;i++)
                    fin_ans+=parseFloat(ans[i]);
                content=prvcontent+instring+fin_ans;
            }
            else{
                content=prvcontent+instring;
            }
            this.setState({
                string:content
            })
        }
    }
    render() {
        return (
            <div id="main">
                <div id="input_text">
                    <Text value={this.state.string}/>
                </div>
                <div id="input_button" onClick={this.handleButton.bind(this)}>
                    <Button value={1}/>
                    <Button value={2}/>
                    <Button value={3}/>
                    <Button value={"DEL"}/>
                    <Button value={"RESET"}/>
                    <Button value={4}/>
                    <Button value={5}/>
                    <Button value={6}/>
                    <Button value={"+"}/>
                    <Button value={"-"}/>
                    <Button value={7}/>
                    <Button value={8}/>
                    <Button value={9}/>
                    <Button value={"*"}/>
                    <Button value={"/"}/>
                    <Button value={"Theme"}/>
                    <Button value={0}/>
                    <Button value={"."}/>
                    <Button value={"="} className={"equal_size"}/>
                </div>
            </div>
        )
    }



}
export default App