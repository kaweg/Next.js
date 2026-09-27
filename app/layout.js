import './globals.css';

export const metadata = {
  title: 'Habit Tracker',
  description: 'Rastreador de hábitos em Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}