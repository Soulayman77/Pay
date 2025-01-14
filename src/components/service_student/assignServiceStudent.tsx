import { IonButton, IonCol, IonRow, IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";
import ServiceType from "../../Models/ServiceType";
import SideMenu from "../sidemenu/sidemenu";
import Notification_setting from "../notification_setting";
import ListWithPagination from "../page/pages";
import ServiceItem from "../service/ServiceItems/serviceItem";
import { getAllServices } from "../../Services/ServiceService";
import StudentType from "../../Models/studentType";
import { getStudentById, updateStudent } from "../../Services/StrudentService";
import { useHistory } from "react-router";
import { createServiceState } from "../../Services/ServiceStateService";


function ServiceToStudent(){
    const history = useHistory();
    const [allServices,setServices]=useState<ServiceType[]>([])
    const [toChoose,setToChoose]=useState<ServiceType[]>(allServices)
    const [allChecked, setallChecked] = useState(false);
    const [selectedService,setSelectedService] = useState<ServiceType[]>([]);
    const [isCheckedDictionary, setIsCheckedDictionary]= useState<{ [key: string]:boolean }>({});
    const [currentStudent,setCurrentStudent]=useState<StudentType>();
    const [studentId, setStudentId] = useState<number>();
    const getQueryParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      console.log("attempted to get params",searchParams.get('studentId'));
      
      return searchParams.get('studentId');
    };
    useEffect(() => {
      getAllServices().then((res) => {
          setServices(res.data);
          // Initialize isCheckedDictionary with false for all services
          const initialCheckState: { [key: string]:boolean } = {};
          res.data.forEach(service => {
              initialCheckState[service.name] = false;
          });
          setIsCheckedDictionary(initialCheckState);
      });
      const queryParamsValue = getQueryParams();
      if (queryParamsValue !== null) {
          setStudentId(parseInt(queryParamsValue, 10));
      }
  }, []);
  useEffect(() => {
      if (studentId !== undefined) {
          getStudentById(studentId).then((rest) => {
              setCurrentStudent(rest.data);
          });
      }
  }, [studentId]);

  //khasss nhyd services lli deja assigner l student mn toChoose

    useEffect(()=>{
      setToChoose(allServices/*.filter(s=>s.type==="OBLIGATORY"  )*/);
    },[allServices])

    useEffect(() => {
      if(selectedService.length===toChoose.length){
        setallChecked(true)
      }
    }, [selectedService]);
  
      const selectAll=()=>{
        setallChecked(!allChecked);
        if(!allChecked){
         setSelectedService(toChoose);
         toChoose.map((ser)=>{
          setIsCheckedDictionary(prevState => ({
          ...prevState,
          [ser.name]: true
      }));})
    }
        else{
          setSelectedService([])
          toChoose.map((ser)=>{
            setIsCheckedDictionary(prevState => ({
            ...prevState,
            [ser.name]: false
        }));})
        }
        }
     
        const handleCheckboxChange = (service:ServiceType) => {
          let updatedSelectedService: ServiceType[];
          const isChecked = isCheckedDictionary[service.name] || false;
          const alreadyExists = selectedService.some(p => p.name === service.name);
        
          if (!isChecked && !alreadyExists) {
            updatedSelectedService = [...selectedService, service];
          } else if (isChecked && alreadyExists) {
            updatedSelectedService = selectedService.filter(p => p.name !== service.name);
          } else {
            updatedSelectedService = selectedService;
          }
          setSelectedService(updatedSelectedService);
          setIsCheckedDictionary(prevState => ({
            ...prevState,
            [service.name]: !isChecked
        }));
        
          if (allChecked) {
            setallChecked(false);
          }
        };
        const handleOkButtonClick = () => {
          if (currentStudent) {
              const updatedStudent: StudentType = {
                  ...currentStudent,
                  etatServices: selectedService.map(service => ({
                      id: 0, // Assuming the ID should be assigned by the backend
                      dateInscription: new Date(), // You may need to change this according to your requirement
                      payer: false,
                      service: service
                  }))
                  
              };
              const serviceStates = selectedService.map(service => {
                return createServiceState({
                    id: 0, // Assuming the ID should be assigned by the backend
                    dateInscription: new Date(), // You may need to change this according to your requirement
                    payer: false,
                    service: service,
                    eleve: currentStudent
                });
            });
    
            // Handle success/failure of creating service states
            Promise.all(serviceStates)
                .then(() => {
                    console.log("Service states created successfully.");
                    history.push("/ERP_Project/students");
                })
                .catch(error => {
                    console.error("Error creating service states:", error);
                });
              /*updateStudent(updatedStudent,studentId).then(() => {
                  // Handle success
                  console.log(updatedStudent);
                  
                  console.log("Services updated successfully.");
                  history.push("/ERP_Project/students");
              }).catch(error => {
                  // Handle error
                  console.error("Error updating services:", error);
              });*/
              
          }
      };
      return(
        <div className="bgroundpayment row">
          <SideMenu active_Row={"row_12"}/>
          <div className="medSection col-10">  
            <div className="col-12 midle1 p-3">
                  <div className="service_title row">
                      <div className="service_title_text col-3">Payments</div>
                      <div className="Service_seach col-6">
                          <IonSearchbar className="Service_search_bar"></IonSearchbar>
                      </div>
                      <div className="service_title_left col-3">
                          <Notification_setting />
                      </div>
                  </div>
  
                  <div className="formulaire">
                      <div className="newAccount">
                        <IonRow>
                          <h5> Services</h5>
                          </IonRow>
                      </div>
                      
                      <div className="my-2 mx-4">
                        <IonRow >
                            <div className="col-1">
                              <input type="checkbox"
                                  onChange={selectAll}
                                  checked={allChecked}
                               /> All
                            </div>
                            <div className="row col-11">
                              <div className="col-3 px-4">Service</div>
                              <div className="col-3 px-5">Price</div>
                              <div className="col-3 px-4">Orders</div>
                              <div className="col-2 px-4">Interest</div>
                            </div>
                        </IonRow>
                        <ListWithPagination<ServiceType>
                              itemsPerPage={3}
                              data={toChoose}
                              renderListItem={(service) => (
                                <IonRow className="row">
                                    <div className="col-1 pt-5"><input type="checkbox" onChange={()=>handleCheckboxChange(service)} checked={isCheckedDictionary[service.name]||allChecked}/></div>
                                    <div className="col-11">
                                    <ServiceItem
                                      item={service}
                                    /></div>
                                  </IonRow>
                              )}
                              />
                          
                          <div className="button-container mt-2">
                                <IonButton onClick={handleOkButtonClick} shape="round" className="text_1">
                                    ok
                                </IonButton>
                            </div>
                      </div>
                  </div>
  
                </div>
          </div>
        </div>
      )
  }
  export default ServiceToStudent;  