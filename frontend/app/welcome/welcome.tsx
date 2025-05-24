import logoDark from './logo-dark.svg';
import logoLight from './logo-light.svg';

export function Welcome() {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-800 font-sans'>
      {/* Header */}
      <header className='bg-indigo-600 text-white p-4 flex justify-between items-center shadow'>
        <h1 className='text-xl font-bold'>🌙 CBT Insomnia Tracker</h1>
        <button className='hover:text-gray-200'>⚙ Settings</button>
      </header>

      {/* Main Content */}
      <main className='p-4 max-w-3xl mx-auto space-y-6'>
        {/* Greeting and Call to Action */}
        <section className='text-center'>
          <h2 className='text-xl font-semibold mb-2'>Welcome back, Tom 👋</h2>
          <p className='mb-4'>Ready to log today’s sleep?</p>
          <div className='flex justify-center gap-4'>
            <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow'>
              📝 Start Sleep Log
            </button>
            <button className='bg-white border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md shadow hover:bg-indigo-50'>
              📊 View Progress
            </button>
          </div>
        </section>

        {/* Today’s Summary */}
        <section className='bg-white rounded-lg p-4 shadow'>
          <h3 className='text-lg font-semibold mb-2'>✅ Today’s Summary</h3>
          <ul className='space-y-1'>
            <li>
              🕒 Slept: <strong>6 hrs 15 min</strong>
            </li>
            <li>
              📈 Efficiency: <strong>82%</strong>
            </li>
            <li>
              😌 Quality: <strong>😐</strong>
            </li>
            <li>
              🗒 Notes: <em>"Had a hard time falling asleep..."</em>
            </li>
          </ul>
        </section>

        {/* Recent Journal Entries */}
        <section className='bg-white rounded-lg p-4 shadow'>
          <h3 className='text-lg font-semibold mb-2'>
            📅 Recent Journal Entries
          </h3>
          <ul className='divide-y divide-gray-200'>
            {['May 20', 'May 19', 'May 18'].map((date, i) => (
              <li key={i} className='py-2 flex justify-between text-sm'>
                <span>{date}</span>
                <span>Slept {6 + i}h</span>
                <span>Efficiency {80 + i * 2}%</span>
                <span>{['😐', '🙂', '😣'][i]}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tip of the Day */}
        <section className='bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded shadow'>
          <p className='italic text-sm'>
            💡 “If you can't sleep after 20 min, get up and do a relaxing
            activity until you feel drowsy again.”
          </p>
        </section>

        {/* Learn More */}
        <section className='text-center'>
          <a href='#' className='text-indigo-600 hover:underline font-medium'>
            📚 What is CBT for Insomnia? →
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className='text-center text-xs text-gray-500 p-4'>
        🌀 Data is stored only in your browser. | Apache 2.0 License | Version
        0.1
      </footer>
    </div>
  );
}

const resources = [
  {
    href: 'https://reactrouter.com/docs',
    text: 'React Router Docs',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        className='stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300'
      >
        <path
          d='M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
  {
    href: 'https://rmx.as/discord',
    text: 'Join Discord',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='20'
        viewBox='0 0 24 20'
        fill='none'
        className='stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300'
      >
        <path
          d='M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z'
          strokeWidth='1.5'
        />
      </svg>
    ),
  },
];
