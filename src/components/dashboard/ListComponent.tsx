
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { IonCol, IonRow} from '@ionic/react';

interface Student {
    id:number;
    firstName:String;
        lastName:String;
        address:String;
        classs:String;
        phone:String;
        dateNaissance:Date;
        parent:String;
        sold:number
  }
  
  interface ListComponentProps {
    data: Student;
  }
  
  const ListComponent: React.FC<ListComponentProps> = ({data }) => {

    return(
        <div className='unpaid_student'> 
                                <IonRow  className='row1'>
                                    <IonCol className='photo'>
                                        <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1702236437~exp=1702237037~hmac=44b4655423a2cb3bb4fa6f54d3828c164cc373a3d35fec1ad38416641b45421c" alt="logo" />
                                    </IonCol>
                                    
                                    <p className='infos col-3'>{data.firstName} {data.lastName}</p>
                                    <p className='infos col-2' id='ID'>{data.id}</p>

                                    <p className='infos col-2'>
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="36" height="36" rx="18" fill="#FB7D5B"/>
                                        <path d="M20.7792 13.8939C20.7792 14.0486 20.7686 14.2032 20.7493 14.3562C20.7581 14.2946 20.7669 14.2314 20.7739 14.1698C20.7317 14.4757 20.6508 14.7728 20.5331 15.0575C20.5559 15.0013 20.5805 14.945 20.6034 14.8888C20.4856 15.1665 20.3344 15.4267 20.1499 15.6657C20.1868 15.6183 20.2237 15.5708 20.2606 15.5234C20.0778 15.7589 19.8651 15.9716 19.6296 16.1544C19.677 16.1175 19.7245 16.0806 19.7719 16.0437C19.5329 16.2265 19.2727 16.3794 18.995 16.4972C19.0512 16.4743 19.1075 16.4497 19.1637 16.4269C18.879 16.5446 18.5819 16.6255 18.276 16.6677C18.3376 16.6589 18.4008 16.6501 18.4624 16.6431C18.1548 16.6835 17.8454 16.6835 17.5378 16.6431C17.5993 16.6519 17.6626 16.6607 17.7241 16.6677C17.4182 16.6255 17.1212 16.5446 16.8364 16.4269C16.8926 16.4497 16.9489 16.4743 17.0051 16.4972C16.7274 16.3794 16.4672 16.2282 16.2282 16.0437C16.2756 16.0806 16.3231 16.1175 16.3706 16.1544C16.135 15.9716 15.9223 15.7589 15.7395 15.5234C15.7764 15.5708 15.8133 15.6183 15.8503 15.6657C15.6674 15.4267 15.5145 15.1665 15.3967 14.8888C15.4196 14.945 15.4442 15.0013 15.4671 15.0575C15.3493 14.7728 15.2684 14.4757 15.2262 14.1698C15.235 14.2314 15.2438 14.2946 15.2508 14.3562C15.2104 14.0486 15.2104 13.7392 15.2508 13.4316C15.2421 13.4931 15.2333 13.5564 15.2262 13.6179C15.2684 13.312 15.3493 13.015 15.4671 12.7302C15.4442 12.7864 15.4196 12.8427 15.3967 12.8989C15.5145 12.6212 15.6657 12.3611 15.8503 12.122C15.8133 12.1695 15.7764 12.2169 15.7395 12.2644C15.9223 12.0288 16.135 11.8161 16.3706 11.6333C16.3231 11.6702 16.2756 11.7071 16.2282 11.7441C16.4672 11.5612 16.7274 11.4083 17.0051 11.2905C16.9489 11.3134 16.8926 11.338 16.8364 11.3609C17.1212 11.2431 17.4182 11.1622 17.7241 11.12C17.6626 11.1288 17.5993 11.1376 17.5378 11.1446C17.8454 11.1042 18.1548 11.1042 18.4624 11.1446C18.4008 11.1359 18.3376 11.1271 18.276 11.12C18.5819 11.1622 18.879 11.2431 19.1637 11.3609C19.1075 11.338 19.0512 11.3134 18.995 11.2905C19.2727 11.4083 19.5329 11.5595 19.7719 11.7441C19.7245 11.7071 19.677 11.6702 19.6296 11.6333C19.8651 11.8161 20.0778 12.0288 20.2606 12.2644C20.2237 12.2169 20.1868 12.1695 20.1499 12.122C20.3327 12.3611 20.4856 12.6212 20.6034 12.8989C20.5805 12.8427 20.5559 12.7864 20.5331 12.7302C20.6508 13.015 20.7317 13.312 20.7739 13.6179C20.7651 13.5564 20.7563 13.4931 20.7493 13.4316C20.7686 13.5845 20.7774 13.7392 20.7792 13.8939C20.7809 14.2612 21.1008 14.6146 21.4823 14.597C21.862 14.5794 22.1872 14.2876 22.1854 13.8939C22.1819 13.0519 21.9288 12.1905 21.4331 11.505C21.2995 11.3204 21.1571 11.1394 20.9989 10.9759C20.8389 10.8107 20.6632 10.6683 20.4803 10.5294C20.1481 10.2763 19.7772 10.09 19.3835 9.94582C17.7962 9.36398 15.8819 9.88254 14.8079 11.1903C14.6602 11.3696 14.5196 11.556 14.4001 11.7564C14.2805 11.955 14.1874 12.1659 14.1012 12.3804C13.9395 12.7777 13.8569 13.1995 13.8235 13.6267C13.7585 14.4634 13.9764 15.337 14.4124 16.0542C14.8325 16.7468 15.4671 17.3409 16.2089 17.6767C16.4268 17.7751 16.6501 17.8665 16.8821 17.9316C17.1124 17.9948 17.3462 18.03 17.5835 18.0581C18.0159 18.1091 18.4571 18.0739 18.8842 17.9878C20.5067 17.6573 21.8655 16.2599 22.1169 14.6198C22.1538 14.3808 22.1819 14.1417 22.1819 13.8991C22.1837 13.5318 21.8567 13.1784 21.4788 13.196C21.0991 13.2083 20.7792 13.5001 20.7792 13.8939ZM23.1118 24.8855C22.7673 24.8855 22.4227 24.8855 22.0782 24.8855C21.2573 24.8855 20.4382 24.8855 19.6173 24.8855C18.6294 24.8855 17.6415 24.8855 16.6518 24.8855C15.7993 24.8855 14.9467 24.8855 14.0924 24.8855C13.6934 24.8855 13.2944 24.889 12.8954 24.8855C12.8514 24.8855 12.8075 24.8819 12.7653 24.8767C12.8268 24.8855 12.8901 24.8943 12.9516 24.9013C12.8813 24.8907 12.8145 24.8714 12.7495 24.845C12.8057 24.8679 12.862 24.8925 12.9182 24.9153C12.8479 24.8855 12.7829 24.8468 12.7213 24.7993C12.7688 24.8362 12.8163 24.8732 12.8637 24.9101C12.811 24.8661 12.7618 24.8187 12.7196 24.7659C12.7565 24.8134 12.7934 24.8609 12.8303 24.9083C12.7829 24.8468 12.746 24.7818 12.7143 24.7114C12.7372 24.7677 12.7618 24.8239 12.7846 24.8802C12.7583 24.8152 12.7407 24.7466 12.7284 24.678C12.7372 24.7396 12.746 24.8028 12.753 24.8644C12.7249 24.6517 12.7442 24.4267 12.7442 24.2122C12.7442 23.9609 12.7442 23.7112 12.7442 23.4599C12.7442 23.2718 12.7547 23.0855 12.7794 22.8991C12.7706 22.9607 12.7618 23.0239 12.7547 23.0855C12.804 22.7251 12.8989 22.3718 13.0413 22.0361C13.0184 22.0923 12.9938 22.1486 12.971 22.2048C13.1081 21.8849 13.2838 21.5843 13.4965 21.3083C13.4596 21.3558 13.4227 21.4032 13.3858 21.4507C13.5985 21.1782 13.8428 20.9321 14.1171 20.7195C14.0696 20.7564 14.0221 20.7933 13.9747 20.8302C14.2506 20.6175 14.5512 20.4417 14.8712 20.3046C14.8149 20.3275 14.7587 20.3521 14.7024 20.3749C15.0381 20.2343 15.3897 20.1376 15.7518 20.0884C15.6903 20.0972 15.627 20.106 15.5655 20.113C15.8256 20.0796 16.084 20.0778 16.346 20.0778C16.6676 20.0778 16.9893 20.0778 17.311 20.0778C18.0616 20.0778 18.8122 20.0778 19.5628 20.0778C19.8528 20.0778 20.1411 20.0761 20.4311 20.113C20.3696 20.1042 20.3063 20.0954 20.2448 20.0884C20.6051 20.1376 20.9585 20.2325 21.2942 20.3749C21.238 20.3521 21.1817 20.3275 21.1255 20.3046C21.4454 20.4417 21.746 20.6175 22.0219 20.8302C21.9745 20.7933 21.927 20.7564 21.8796 20.7195C22.152 20.9321 22.3981 21.1765 22.6108 21.4507C22.5739 21.4032 22.537 21.3558 22.5001 21.3083C22.7128 21.5843 22.8885 21.8849 23.0257 22.2048C23.0028 22.1486 22.9782 22.0923 22.9553 22.0361C23.096 22.3718 23.1926 22.7234 23.2419 23.0855C23.2331 23.0239 23.2243 22.9607 23.2173 22.8991C23.2507 23.1646 23.2524 23.4282 23.2524 23.6954C23.2524 23.9855 23.2524 24.2755 23.2524 24.5655C23.2524 24.6657 23.2559 24.7659 23.2436 24.8644C23.2524 24.8028 23.2612 24.7396 23.2682 24.678C23.2577 24.7484 23.2383 24.8152 23.212 24.8802C23.2348 24.8239 23.2594 24.7677 23.2823 24.7114C23.2524 24.7818 23.2137 24.8468 23.1663 24.9083C23.2032 24.8609 23.2401 24.8134 23.277 24.7659C23.2331 24.8187 23.1856 24.8679 23.1329 24.9101C23.1803 24.8732 23.2278 24.8362 23.2753 24.7993C23.2137 24.8468 23.1487 24.8837 23.0784 24.9153C23.1346 24.8925 23.1909 24.8679 23.2471 24.845C23.1821 24.8714 23.1135 24.889 23.045 24.9013C23.1065 24.8925 23.1698 24.8837 23.2313 24.8767C23.1926 24.8819 23.1522 24.8837 23.1118 24.8855C22.9307 24.8872 22.7444 24.9628 22.6143 25.0911C22.493 25.2124 22.3999 25.4128 22.4087 25.5886C22.4262 25.9648 22.718 26.297 23.1118 26.2917C23.7956 26.2812 24.3967 25.8347 24.5971 25.179C24.6762 24.9189 24.6587 24.6394 24.6587 24.3722C24.6587 23.7605 24.678 23.154 24.5725 22.5476C24.4178 21.6599 23.9714 20.8249 23.3596 20.1693C22.7479 19.5136 21.9253 19.032 21.0551 18.8175C20.5559 18.6945 20.0532 18.6751 19.5434 18.6751C19.0196 18.6751 18.4975 18.6751 17.9737 18.6751C17.4569 18.6751 16.9419 18.6751 16.4251 18.6751C15.903 18.6751 15.3844 18.6997 14.8764 18.8351C14.0133 19.0636 13.2012 19.5505 12.6018 20.2114C11.9971 20.8777 11.5594 21.7144 11.4171 22.6073C11.3221 23.2068 11.3415 23.8079 11.3415 24.4126C11.3415 24.6903 11.3256 24.9804 11.4258 25.2458C11.5559 25.5868 11.7633 25.8558 12.0674 26.0579C12.3047 26.2144 12.6053 26.29 12.8866 26.2935C13.0237 26.2952 13.1608 26.2935 13.2979 26.2935C13.6495 26.2935 13.9993 26.2935 14.3508 26.2935C14.8501 26.2935 15.3475 26.2935 15.8467 26.2935C16.4268 26.2935 17.0069 26.2935 17.587 26.2935C18.1829 26.2935 18.777 26.2935 19.3729 26.2935C19.9178 26.2935 20.461 26.2935 21.0059 26.2935C21.4331 26.2935 21.8602 26.2935 22.2856 26.2935C22.5299 26.2935 22.7743 26.2935 23.0186 26.2935C23.0503 26.2935 23.0819 26.2935 23.1135 26.2935C23.4809 26.2935 23.8342 25.97 23.8167 25.5903C23.7991 25.2071 23.5073 24.8855 23.1118 24.8855Z" fill="white"/>
                                        </svg> {data.classs}
                                    </p>
                                    <p className='infos col-2'>$ {data.sold}</p>
                                    <p className='infos col-2'>
                                        <svg className='col-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_479_1624)">
                                            <path d="M23 19H18.93C18.6648 19 18.4104 18.8946 18.2229 18.7071C18.0354 18.5196 17.93 18.2652 17.93 18V15H6V18C6 18.2652 5.89464 18.5196 5.70711 18.7071C5.51957 18.8946 5.26522 19 5 19H1C0.734784 19 0.48043 18.8946 0.292893 18.7071C0.105357 18.5196 0 18.2652 0 18V8C0 7.20435 0.31607 6.44129 0.87868 5.87868C1.44129 5.31607 2.20435 5 3 5H21C21.7956 5 22.5587 5.31607 23.1213 5.87868C23.6839 6.44129 24 7.20435 24 8V18C24 18.2652 23.8946 18.5196 23.7071 18.7071C23.5196 18.8946 23.2652 19 23 19ZM19.93 17H22V8C22.0015 7.86827 21.9766 7.73757 21.9269 7.61558C21.8771 7.49359 21.8035 7.38276 21.7104 7.28961C21.6172 7.19646 21.5064 7.12285 21.3844 7.07312C21.2624 7.02339 21.1317 6.99853 21 7H3C2.86827 6.99853 2.73757 7.02339 2.61558 7.07312C2.49359 7.12285 2.38276 7.19646 2.28961 7.28961C2.19646 7.38276 2.12285 7.49359 2.07312 7.61558C2.02339 7.73757 1.99853 7.86827 2 8V17H4V14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H18.93C19.1952 13 19.4496 13.1054 19.6371 13.2929C19.8246 13.4804 19.93 13.7348 19.93 14V17Z" fill="#A098AE"/>
                                            <path d="M18.933 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0L18.933 0C19.1982 0 19.4526 0.105357 19.6401 0.292893C19.8276 0.48043 19.933 0.734784 19.933 1V6C19.933 6.26522 19.8276 6.51957 19.6401 6.70711C19.4526 6.89464 19.1982 7 18.933 7ZM6 5H17.933V2H6V5ZM17.033 24H6.9C6.13087 24 5.39325 23.6945 4.84939 23.1506C4.30554 22.6068 4 21.8691 4 21.1V14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H18.93C19.1952 13 19.4496 13.1054 19.6371 13.2929C19.8246 13.4804 19.93 13.7348 19.93 14V21.1C19.93 21.8686 19.6249 22.6058 19.0817 23.1495C18.5385 23.6933 17.8016 23.9992 17.033 24ZM6 15V21.1C6 21.3387 6.09482 21.5676 6.2636 21.7364C6.43239 21.9052 6.66131 22 6.9 22H17.033C17.2717 22 17.5006 21.9052 17.6694 21.7364C17.8382 21.5676 17.933 21.3387 17.933 21.1V15H6ZM20 10H19C18.7348 10 18.4804 9.89464 18.2929 9.70711C18.1054 9.51957 18 9.26522 18 9C18 8.73478 18.1054 8.48043 18.2929 8.29289C18.4804 8.10536 18.7348 8 19 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9C21 9.26522 20.8946 9.51957 20.7071 9.70711C20.5196 9.89464 20.2652 10 20 10Z" fill="#A098AE"/>
                                            <path d="M15 18H9C8.73478 18 8.48043 17.8946 8.29289 17.7071C8.10536 17.5196 8 17.2652 8 17C8 16.7348 8.10536 16.4804 8.29289 16.2929C8.48043 16.1054 8.73478 16 9 16H15C15.2652 16 15.5196 16.1054 15.7071 16.2929C15.8946 16.4804 16 16.7348 16 17C16 17.2652 15.8946 17.5196 15.7071 17.7071C15.5196 17.8946 15.2652 18 15 18ZM12 21H9C8.73478 21 8.48043 20.8946 8.29289 20.7071C8.10536 20.5196 8 20.2652 8 20C8 19.7348 8.10536 19.4804 8.29289 19.2929C8.48043 19.1054 8.73478 19 9 19H12C12.2652 19 12.5196 19.1054 12.7071 19.2929C12.8946 19.4804 13 19.7348 13 20C13 20.2652 12.8946 20.5196 12.7071 20.7071C12.5196 20.8946 12.2652 21 12 21Z" fill="#A098AE"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_479_1624">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        <svg className='col-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0012 9.36011C11.6543 9.36011 11.3109 9.42842 10.9904 9.56116C10.67 9.69389 10.3788 9.88844 10.1335 10.1337C9.88829 10.379 9.69374 10.6701 9.56101 10.9906C9.42828 11.311 9.35996 11.6545 9.35996 12.0013C9.35996 12.3482 9.42828 12.6916 9.56101 13.0121C9.69374 13.3325 9.88829 13.6237 10.1335 13.8689C10.3788 14.1142 10.67 14.3087 10.9904 14.4415C11.3109 14.5742 11.6543 14.6425 12.0012 14.6425C12.7017 14.6423 13.3734 14.3639 13.8686 13.8685C14.3638 13.3731 14.6419 12.7012 14.6418 12.0007C14.6416 11.3002 14.3632 10.6285 13.8677 10.1333C13.3723 9.63806 12.7004 9.35995 12 9.36011H12.0012ZM3.60116 9.36011C3.25431 9.36011 2.91086 9.42842 2.59042 9.56116C2.26997 9.69389 1.97881 9.88844 1.73355 10.1337C1.48829 10.379 1.29374 10.6701 1.16101 10.9906C1.02828 11.311 0.959961 11.6545 0.959961 12.0013C0.959961 12.3482 1.02828 12.6916 1.16101 13.0121C1.29374 13.3325 1.48829 13.6237 1.73355 13.8689C1.97881 14.1142 2.26997 14.3087 2.59042 14.4415C2.91086 14.5742 3.25431 14.6425 3.60116 14.6425C4.30165 14.6423 4.97339 14.3639 5.4686 13.8685C5.9638 13.3731 6.24192 12.7012 6.24176 12.0007C6.2416 11.3002 5.96318 10.6285 5.46775 10.1333C4.97231 9.63806 4.30045 9.35995 3.59996 9.36011H3.60116ZM20.4012 9.36011C20.0543 9.36011 19.7109 9.42842 19.3904 9.56116C19.07 9.69389 18.7788 9.88844 18.5336 10.1337C18.2883 10.379 18.0937 10.6701 17.961 10.9906C17.8283 11.311 17.76 11.6545 17.76 12.0013C17.76 12.3482 17.8283 12.6916 17.961 13.0121C18.0937 13.3325 18.2883 13.6237 18.5336 13.8689C18.7788 14.1142 19.07 14.3087 19.3904 14.4415C19.7109 14.5742 20.0543 14.6425 20.4012 14.6425C21.1017 14.6423 21.7734 14.3639 22.2686 13.8685C22.7638 13.3731 23.0419 12.7012 23.0418 12.0007C23.0416 11.3002 22.7632 10.6285 22.2677 10.1333C21.7723 9.63806 21.1005 9.35995 20.4 9.36011H20.4012Z" fill="#A098AE"/>
                                        </svg>

                                    </p>
                                </IonRow>
       
                        </div>
    )
}
export default ListComponent;