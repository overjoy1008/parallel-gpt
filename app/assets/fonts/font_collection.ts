// Optimized Google Fonts
import { Inter, Jost, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const jost = Jost({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
});


// Optimized Local Fonts
import localFont from 'next/font/local'

export const pretendard = localFont({ src: './PretendardVariable.ttf' })