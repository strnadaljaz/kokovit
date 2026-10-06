"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface AddToCartModalProps {
    quantity: number;
    onClose: () => void;
}

function CartIcon() {
    return (
        <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h2l2.4 11.2a2 2 0 001.95 1.58h8.9a2 2 0 001.95-1.58L22 8H6" />
            <circle cx="10" cy="20" r="1.25" strokeWidth={2} />
            <circle cx="18" cy="20" r="1.25" strokeWidth={2} />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 6l12 12M18 6L6 18" />
        </svg>
    );
}

function ModalButton({
    children,
    onClick,
    variant,
}: {
    children: ReactNode;
    onClick: () => void;
    variant: "primary" | "secondary";
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex w-full cursor-pointer items-center justify-center rounded-xl px-5 py-3.5 text-center font-bold transition sm:w-auto ${variant === "primary"
                    ? "bg-[#2d5016] text-[#F5F5DC] hover:bg-[#4CAF50]"
                    : "border-2 border-[#2d5016]/15 bg-white text-[#2d5016] hover:border-[#4CAF50] hover:text-[#4CAF50]"
                }`}
        >
            {children}
        </button>
    );
}

export default function AddToCartModal({ quantity, onClose }: AddToCartModalProps) {
    const router = useRouter();

    const goToCheckout = () => {
        onClose();
        router.push("/blagajna");
    };

    return (
        <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#1d3218]/65 p-4 backdrop-blur-sm"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="added-to-cart-title"
                className="relative w-full max-w-lg overflow-hidden rounded-[30px] bg-[#F5F5DC] text-[#2d5016] shadow-[0_28px_90px_rgba(20,36,18,0.35)] animate-slide-up"
            >
                <div className="h-2 bg-[#4CAF50]" />
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Zapri obvestilo"
                    className="absolute right-4 top-5 rounded-full p-2 text-[#2d5016]/60 transition hover:bg-[#2d5016]/10 hover:text-[#2d5016]"
                >
                    <CloseIcon />
                </button>

                <div className="px-6 pb-7 pt-8 text-center sm:px-10 sm:pb-9">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50]/15 text-[#4CAF50]">
                        <CartIcon />
                    </div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#6b4226]">
                        Izdelek dodan
                    </p>
                    <h2 id="added-to-cart-title" className="text-3xl font-black sm:text-4xl">
                        {quantity} {quantity === 1 ? "kos je" : "kosov je"} v košarici
                    </h2>
                    <p className="mx-auto mt-3 max-w-sm text-gray-600">
                        Želite zaključiti nakup ali nadaljevati z nakupovanjem?
                    </p>

                    <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
                        <ModalButton onClick={onClose} variant="secondary">
                            Nadaljuj z nakupovanjem
                        </ModalButton>
                        <ModalButton onClick={goToCheckout} variant="primary">
                            Pojdi na blagajno
                        </ModalButton>
                    </div>
                </div>
            </section>
        </div>
    );
}
