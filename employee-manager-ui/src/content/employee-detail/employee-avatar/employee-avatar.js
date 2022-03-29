import React from 'react';
import './employee-avatar.css';

class EmployeeAvatar extends React.Component {
    render() {
        return (
            <div className="avatar">
                <div class="avatar-image-box">
                    <img className="avatar-image" src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/276224534_716997612768279_6505661856941342185_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=PuSlNxJK3noAX_ExCDg&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9vpfXRWhW33x-JLd4dRrI2WQb0tML3Q5_RhPyMmXuz6A&oe=6247D36F"></img>
                    <div className="upload-image">
                        <input className="uploadImageInput" type="file" id='selectedFile' />
                        <input className="btn btn-primary input-choose" type="button" value="Choose" onClick={() => document.getElementById('selectedFile').click()}/>
                        <button className="btn btn-primary button-submit" value="">Submit</button>
                    </div>
                </div>
                <div className=" badges ">
                    <div className="id badge bg-primary text-wrap ">
                        No: 1
                    </div>
                    <div className="age badge bg-success text-wrap ">
                        Age: 22
                    </div>
                    <br></br>
                    <div className="badge bg-warning text-wrap ">
                        Sex: Male
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeAvatar