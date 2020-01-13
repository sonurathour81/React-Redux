import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



// const timefun = () =>{
//     var today = new Date();
//     // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//     // var time = today.getHours() + ":" + today.getMinutes();
//     // var dateTime = date+' '+time;
//     return today.getTime('today');
// }

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author='sam' 
                    timeAgo="Today at 12:02 PM"
                    content="nice blog!"
                    imgs={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author='ram' 
                timeAgo="Yesterday at 11:59 AM"
                    content="Good blog!"
                    imgs={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author='dam' 
                    timeAgo="Today at 12:02 PM"
                    content="Awesom blog!"
                    imgs={faker.image.avatar()} 
                />
            </ApprovalCard>
            

        </div>
    )
}

ReactDOM.render(<App /> , document.querySelector('#root'));
