import React, {useState} from "react";
import "./carrentalheader.css";
import Footer2 from "./Footer2";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";



 const CarRentalHeader = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [passenger, setPassenger] = useState(false);
  const navigate3 = useNavigate();
  
  function handlePassenger() {
    setPassenger(!passenger);
  }
  function handleSearch() {
    if (from === "") {
      alert("Please add pickup location");
    } else if (to === "") {
      alert("Please add drop location");
    } else {
      navigate3("/car-result", {
        state: { date, from, to },
      });
    }
  }

  function handleFrom(e) {
    setFrom(e.target.value);
  }
  function handleTo(e) {
    setTo(e.target.value);
  }
  
  return (
    <>
      <div className="rentalContainer0">
        <div className="rentalContainer">
          <p>
            Car hire for any kind of trip <i className="bi bi-car-front"></i>
          </p>
          <span>
            Great deals at great prices, from the biggest car hire companies <br />

            <div className="choose1">

            <div className="takeoff1">
            <i className="bi bi-car-front-fill"></i>
              <input
                type="text"
                placeholder="Pickup location?"
                onChange={handleFrom}
              ></input>
            </div>

            <div className="landing1">
            <i className="bi bi-car-front-fill"></i>
              <input
                type="text"
                placeholder="Drop location?"
                onChange={handleTo}
              ></input>
            </div>

            <div className="date11">
              <i className="bi bi-calendar3"></i>
              <span onClick={handlePassenger}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>

              {passenger && (
                <DateRange
                  className="passengerRange1"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </div>
            <div className="buton1">
              <button className="search" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
            
          </span>
        </div>
      </div>
      <div className="force">
        <p> Sign in to save 10% with genius</p>
        <span>You're eligible for discounts on select car rentals.</span>
      </div>

      <div className="flightHeaderContainer3">
        <div className="srchIcon">
          <i className="bi bi-people-fill"></i>
          <div className="srchContainer">
            <span className="heading">Search a huge selection</span>
            <br />
            <span>
              Easily compare flights, airlines, and <br /> prices-all in one
              place
            </span>
          </div>
        </div>

        <div className="money">
          <i className="bi bi-calendar-week"></i>
          <div className="moneyContainer">
            <span className="heading">Pay no hidden fees</span>
            <br />
            <span>
              Get a clear price breakdown every step <br /> of the way
            </span>
          </div>
        </div>

        <div className="flexibility">
          <i className="bi bi-car-front"></i>
          <div className="flexibilityContainer">
            <span className="heading">Get more flexibility</span>
            <br />
            <span>
              Change your travel dates with the <br /> Flexible ticket option*
            </span>
          </div>
        </div>
      </div>

      <div className="rentalContainer1">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Why should I book a car rental in India with Booking.com?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum sunt sint temporibus, optio ex mollitia sequi est magnam
                animi rerum ratione facilis amet eaque deserunt labore nulla
                fuga quaerat nesciunt! Tempore consequatur recusandae
                exercitationem quaerat, necessitatibus saepe ut delectus
                nesciunt ipsum iure itaque explicabo iusto veniam cumque harum
                eveniet aspernatur! Expedita facilis aperiam aut veritatis,
                magnam quisquam corrupti id commodi quia ad deleniti rem, rerum
                nostrum, corporis sapiente! Veritatis aut repellat laboriosam
                aspernatur sequi repellendus. Minus voluptate hic, inventore
                perferendis dicta mollitia excepturi, cupiditate eaque
                consequuntur labore facilis aut unde, tenetur fugit. Saepe
                repudiandae eligendi quisquam sapiente velit illum commodi?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                What do I need to rent a car?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                accusamus, vel iure quae tempore modi corrupti ullam repellat
                repudiandae deserunt, est illum facilis. Dolores, molestias rem
                dolorum eos repellendus unde quia nobis, similique quam
                excepturi eaque eius rerum, ex doloribus numquam voluptatum.
                Quae, totam labore beatae ex animi eaque. Quidem inventore
                laboriosam fugiat voluptatum eum cupiditate hic, natus id, rem
                distinctio adipisci repellat veniam veritatis esse deserunt
                numquam doloremque? Nam nemo in qui quos ullam aut aspernatur
                tempore excepturi iusto ipsum eius esse maiores, animi modi
                cupiditate consequuntur voluptas quam, odit, iste culpa est
                nostrum? Maxime quaerat fuga accusamus culpa.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Am I lod enough to rent a car?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                ex aliquid temporibus cupiditate. Tempore alias quae distinctio
                nesciunt explicabo minus laborum natus odit nobis vero neque
                facere magnam nihil quia dolores qui, totam dolorum laudantium,
                id aliquam voluptatibus debitis. Nobis exercitationem facere
                perferendis voluptate dolorem. Provident, laudantium nisi. Sunt
                omnis et beatae iure officia aspernatur nemo eius labore
                accusantium architecto, ipsa quia aliquid minima repellendus,
                amet inventore, deleniti vero eligendi. Alias amet voluptatem
                maiores fugit officia, reiciendis corporis aperiam incidunt
                perferendis, illum ex. Magnam ipsa iusto, quos quisquam ratione
                cum cupiditate eum facilis, sed suscipit amet hic earum, rem
                iste!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Can I book a car for my partner, friend, colleague, etc?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eius aliquam veniam sequi odio at, accusantium nisi
                ut amet reprehenderit laboriosam dolores consectetur. Nemo minus
                numquam illum quibusdam qui nesciunt sunt alias dicta iusto,
                dolorum fuga cum natus eius, id cumque! Ex ab, iste modi
                accusantium hic quam esse delectus nobis nisi earum ad quo velit
                soluta sequi facere beatae quaerat doloremque quibusdam quasi!
                Quis inventore est quo rerum exercitationem facere excepturi
                suscipit. Odio explicabo, optio ratione alias aperiam, quisquam
                minus pariatur voluptatem aliquam itaque quasi rerum beatae
                accusamus necessitatibus veritatis facere vitae obcaecati
                praesentium inventore dicta perferendis nisi eligendi.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Is the rental price all inclusive?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                ex ipsam dolores numquam ullam aspernatur nulla cupiditate quia
                consequuntur. At non repellat aspernatur esse inventore quos
                quibusdam in illo amet expedita quaerat, dignissimos error.
                Veritatis consequatur iste vero nostrum enim! Odit soluta
                voluptas iure, rerum fugiat facilis non sapiente dolores et
                excepturi debitis possimus. Necessitatibus perferendis repellat
                autem quibusdam quasi itaque sint omnis veritatis impedit fuga.
                Debitis atque culpa impedit eos aperiam molestiae repudiandae
                quae, odio beatae odit quaerat minus autem doloribus perferendis
                assumenda, consequatur dignissimos quisquam! Praesentium
                corporis vero velit nulla rem vel cupiditate modi! Minus velit
                similique omnis.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Footer2 />
    </>
  );
};

export default CarRentalHeader;
