
export default function(){
    return(
        <>
            <form>
                <div className="form-inputs">
                    <div className="inputs">
                        <label for="Cardholder Name" aria-label="Cardholder Name">Cardholder Name</label>
                        <input type="text" aria-label="Name" placeholder="e.g. Jane Appleseed"></input>
                    </div>
                    <div className="inputs">
                        <label for="Card Number" aria-label="Card Number">Card Number</label>
                        <input type="number" aria-label="Number" placeholder="e.g. Jane Appleseed"></input>
                    </div>
                    <div className="inputs">
                        <div className="card-lifespan">
                            <label for="Expiry Date" aria-label="Expiry Date">Exp. Date (MM/YY)</label>
                            <input type="number" aria-label="Month" placeholder="MM"></input>
                            <input type="number" aria-label="Month" placeholder="YY"></input>
                        </div>
                        <div>
                            <label for="CVC" aria-label="CVC">CVC</label>
                            <input type="number" aria-label="Number" placeholder="e.g. 123"></input>
                        </div>
                    </div>
                </div>
                <button type="submit" aria-label="Confirm">
                    <p>Confirm</p>
                </button>
            </form>
        </>
    )
}