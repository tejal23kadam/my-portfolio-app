import './App.css';
function App() {
  return (
    <div>
      <nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>
        <header class="avatar">
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" />
          <h2>John D.</h2>
        </header>
        <ul>
          <li tabindex="0" class="icon-dashboard"><a href="#tabs-2" role="tab" data-toggle="pill">Free Cash Back Purchase Rewards</a></li>
          <li tabindex="0" class="icon-customers"><a href="#tabs-3" role="tab" data-toggle="pill">Free Online Banking</a></li>
          <li tabindex="0" class="icon-users"><span>Users</span></li>
          <li tabindex="0" class="icon-settings"><span>Settings</span></li>
        </ul>
      </nav>

      <main>
        <div >
          <div class="tab-pane" id="tabs-2">
            <h2>Cash Back Purchase Rewards</h2>
            <p>Make your everyday purchases a little less painful. With your X checking account, you'll rack up rewards just by using your Visa&reg; Debit card.
              Personalized, cash back rewards. Nice.</p> <a href="/account-features#Get%20Cash%20Back">Learn More   »</a>
          </div>
          <div class="tab-pane" id="tabs-3">
            <h2>Online Banking</h2>
            <p>Take banking off of your chore list. Now you can do your banking from anywhere, anytime, for free. That's an easy way to keep your money and your time where it belongs - with you.</p> <a href="/account-features#Online Banking">Learn More   »</a>
          </div>
        </div>
      </main>
    </div>
  );
}



export default App;
