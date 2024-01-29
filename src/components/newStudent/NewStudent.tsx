
import {IonInput,IonRow, IonLabel, IonSearchbar} from "@ionic/react"
import './newStudent.css'
import { ChangeEvent, useState } from "react";

function NewStudent(){
        const [imageSrc, setImageSrc] = useState<string | null>(null);
      
        const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
      
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
          }
        };
    return(
            <div className="midle1 p-3">
                <div className="formulaire">
                    <div className="newAccount">
                        <h5> New Student</h5>
                    </div>
                    <div className="mainf">
                        <IonRow>
                            <div className="col-2 mx-2">
                                <g>photo</g>
                                {imageSrc && <img src={imageSrc} alt="Selected"  className="photo1" />}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="photo1"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="col-5 mx-3">
                                <div>
                                    <IonLabel>First Name*</IonLabel>
                                    <IonInput className="my-2" placeholder="your first name" fill="outline" type="text"></IonInput>
                                </div>
                                <div>
                                    <IonLabel>Last Name*</IonLabel>
                                    <IonInput className="my-2" placeholder="your last name" fill="outline" type="text"></IonInput>
                                </div>
                                <div>
                                    <IonLabel>Address*</IonLabel>
                                    <IonInput className="my-2" placeholder="Tinghir, Imider Ait Said Oudaoud" fill="outline" type="text"/>
                                </div>
                            </div>
                            <div className="col-4 mx-3">
                                <IonLabel>Date of birth*</IonLabel>
                                <IonInput className="my-2" fill="outline" type="date"></IonInput>
                                <IonLabel>Class*</IonLabel>
                                <IonInput className="my-2" fill="outline" type="text"></IonInput>
                                <IonLabel>phone*</IonLabel>
                                <IonInput className="my-2" fill="outline" type="tel"></IonInput>
                            </div>
                        </IonRow>
                    </div>
                </div>


            </div>
    )
}
export default NewStudent;