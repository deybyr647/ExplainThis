import Navigation from "@/components/navbar";

export default function getStarted() {
    return(
        <div className="container-fluid">
            <Navigation/>

            <div className="row">
                <div className="col">
                    <h2>Hello Tahir</h2>
                    <form>
                    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                    </form>
                </div>
            </div>
        </div>
    )
}