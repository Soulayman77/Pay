import ServiceType from "./ServiceType";
import StudentType from "./studentType";

export default interface ServiceStateType{
    id: number;
    dateInscription: Date;
    payer :boolean;
    service: ServiceType;
    eleve : StudentType;
}