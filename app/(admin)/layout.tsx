export const metadata = {
  title: "Admin | Sanity Studio",
  description: "This for Admin only",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
