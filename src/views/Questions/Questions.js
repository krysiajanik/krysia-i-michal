import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";
import Question from "../../components/FAQ/Question";
import Answer from "../../components/FAQ/Answer";


const Questions = () => {

    return (
        <>
            <PageHeader>FAQ</PageHeader>

            <Question>1. Jak tam? </Question>
            <Answer>A wszystko w porządku, dzięki.</Answer>

            
            <Question>2. Kiedy będzie tort?</Question>
            <Answer>O 22:00 (O ile wszystko pójdzie zgodnie z planem).</Answer>
            
            <Question>3. Kiedy będzie następny posiłek?</Question>
            <Answer>Obiad zaplanowany jest w okolicy 17:45. Następne ciepłe posiłki zaplanowane są następująco: pierwsza kolacja 20:30, druga kolacja 23:00 i trzecia kolacja około 1:30 (hobbici byliby dumni).</Answer>

            <Question>4. Czy jest inna toaleta niż ta bezpośrednio przy sali?</Question>
            <Answer>Tak, przy recepcji.</Answer>

            <Question>5. Czy jest jakiś transport do Jeleniej Góry?</Question>
            <Answer>Tak, taksówki rozwiozą gości o 4. W razie gdyby ktoś potrzebował wrócić wcześniej, dawajcie znać.</Answer>

            <Question>6. O której jest śniadanie?</Question>
            <Answer>Dla gości hotelowych śniadanie jest od 9:00 do 10:30. Uczulamy natomiast, że klucze do pokoju trzeba oddać w recepcji najpóźniej o 10:30. Po uprzątnięciu bufetu przez obsługę goście mogą spokojnie skończyć posiłek.</Answer>

            <Question>7. Ze mną się nie napijesz?!</Question>
            <Answer>To zależy czego.</Answer>

            <Question>8. Czy ślub jest w ogóle ważny, skoro nie ma oczepin?</Question>
            <Answer>Ku ogrmonemu zdziwieniu wszystkich - jak najbardziej.</Answer>

            <Question>9. O co chodzi z tą wykreślanką?</Question>
            <Answer>W tym gąszczu znaków zostały ukryte imiona i nazwiska wszystkich gości obecnych na weselu. Zabawa polega na zlokalizowaniu i zakreśleniu siebie. Taka alternatywan wersja księgi gości.</Answer>

            <Question>10. Co znaczy FAQ?</Question>
            <Answer>Jest to akronim z angielskiego Frequently Asked Questions - czyli często zadawane pytania. Tradycyjnie jest to sekcja aplikacji/strony internetowej, gdzie można znaleźć odpowiedzi na pytania nurtujące większość użytkowników, coby nie trzeba było się powtarzać.</Answer>

            <Question>11. Więcej niż jedno zwierzę?</Question>
            <Answer>Owca albo lama - zdania są podzielone.</Answer>

            <BackToTop />
            <Footer />
        </>
    );
};

export default Questions;
