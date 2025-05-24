const App = () => {
  return (
    <div>
      <header>
        <h1>🌙 CBT Insomnia Tracker</h1>
        <button>Settings ⚙</button>
      </header>
      <main>
        <section>
          <p>Hello, Tom 👋</p>
          <p>Welcome back! Ready to log today&#39;s sleep?</p>
          <button>📝 Start Sleep Log</button>
          <button>📊 View Progress</button>
        </section>
        <section>
          <h2>✅ Today&#39;s Summary</h2>
          <ul>
            <li>🕒 Slept: 6 hrs 15 min</li>
            <li>📈 Efficiency: 82%</li>
            <li>😌 Quality: 😐</li>
            <li>
              🗒 Notes: <q>Had ahard time falling asleep...</q>
            </li>
          </ul>
        </section>
        <section>
          <h2>📅 Recent Journal Entries</h2>
          <table>
            <tr>
              <td>May 20</td>
              <td>Slept 6h</td>
              <td>Efficiency 80%</td>
              <td>😐</td>
            </tr>
            <tr>
              <td>May 19</td>
              <td>Slept 7h</td>
              <td>Efficiency 88%</td>
              <td>🙂</td>
            </tr>
            <tr>
              <td>May 18</td>
              <td>Slept 5h</td>
              <td>Efficiency 70%</td>
              <td>😣</td>
            </tr>
          </table>
        </section>
        <section>
          <h2>💡 Tip of the Day</h2>
          <blockquote>
            If you can&#39;t sleep after 20 min, get up and do a relaxing
            activity until you feel drowsy again.
          </blockquote>
        </section>
        <section>
          <p>
            📚 What is CBT for Insomnia? → <button>Learn More</button>
          </p>
        </section>
      </main>
      <footer>
        <p>🌀 Data is stored only in your browser</p>
        <p>License: Apache 2.0 | Version 0.1 </p>
      </footer>
    </div>
  );
};

export default App;
