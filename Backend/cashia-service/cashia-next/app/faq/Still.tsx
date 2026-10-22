import Link from "next/link";

export default function Still() {
    return(
        <div className="still">
            <h3> Still Have Questions</h3>
                <p>
                    You can read more on our Frequently asked questions page
                </p>
                <Link
                href="/faqItems"
                className="still-button"
                >
                    See all FAQs
                </Link>
        </div>
    );
}