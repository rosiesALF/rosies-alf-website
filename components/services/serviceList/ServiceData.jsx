import { HeartIcon, Utensils, Activity, Users, BrainIcon, UserCheck, Calendar } from "lucide-react";
import { Bath, Pill, Shield, ChefHat, Brush, HandPlatter, Stethoscope, Dumbbell, Smile, PersonStanding, BookOpen, Clock, Notebook, MessageCircle, House } from "lucide-react";

const BibleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_80_279)">
            <path d="M19 4V20H7C6.46957 20 5.96086 19.7893 5.58579 19.4142C5.21071 19.0391 5 18.5304 5 18V6C5 5.46957 5.21071 4.96086 5.58579 4.58579C5.96086 4.21071 6.46957 4 7 4H19Z" stroke="#A67C52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 16H7C6.46957 16 5.96086 16.2107 5.58579 16.5858C5.21071 16.9609 5 17.4696 5 18" stroke="#A67C52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7V13" stroke="#A67C52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 9H14" stroke="#A67C52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_80_279">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const GraveIcon = () => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_80_314)">
            <path d="M5.3335 21V19C5.3335 18.2044 5.64957 17.4413 6.21218 16.8787C6.77478 16.3161 7.53785 16 8.3335 16H16.3335C17.1291 16 17.8922 16.3161 18.4548 16.8787C19.0174 17.4413 19.3335 18.2044 19.3335 19V21H5.3335Z" stroke="#A67C52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.3335 16V11H6.3335V7H10.3335V3H14.3335V7H18.3335V11H14.3335V16" stroke="#A67C52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_80_314">
                <rect width="24" height="24" fill="white" transform="translate(0.333496)" />
            </clipPath>
        </defs>
    </svg>
)

export const servicesData = [
    {
        mainIcon: <HeartIcon size={38}/>, // Personal Care icon
        title: "Personal Care & Daily Assistance",
        description: "Compassionate support for everyday needs",
        services: [
            {
                icon: <Bath></Bath>, // or appropriate icon name
                text: "Help with bathing, dressing, grooming, toileting, and mobility"
            },
            {
                icon: <Pill></Pill>, // or medication icon
                text: "Medication reminders and management"
            },
            {
                icon: <Shield></Shield>, // or fall prevention icon
                text: "Fall prevention and 24/7 emergency response"
            }
        ]
    },
    {
        mainIcon: <Utensils size={38}/>, // Meals icon
        title: "Meals & Housekeeping",
        description: "Nutritious meals and a clean, comfortable environment",
        services: [
            {
                icon: <ChefHat></ChefHat>, // or plate/meal icon
                text: "Nutritious, home-cooked meals tailored to dietary needs"
            },
            {
                icon: <Brush></Brush>, // or cleaning icon
                text: "Daily housekeeping, laundry, and linen services"
            },
            {
                icon: <HandPlatter></HandPlatter>, // or feeding icon
                text: "Assistance with feeding if needed"
            }
        ]
    },
    {
        mainIcon: <Activity size={38}/>, // Health icon
        title: "Health & Wellness",
        description: "Comprehensive care for physical and mental wellbeing",
        services: [
            {
                icon: <Stethoscope></Stethoscope>, // or medical coordination icon
                text: "Coordination with doctors, nurses, and therapists"
            },
            {
                icon: <Dumbbell></Dumbbell>, // or therapy icon
                text: "Physical therapy and mobility support"
            },
            {
                icon: <Smile></Smile>, // or mental health icon
                text: "Mental health and emotional well-being programs"
            }
        ]
    },
    {
        mainIcon: <Users size={38}/>, // Activities icon
        title: "Activities & Social Engagement",
        description: "Enriching activities to foster community and joy",
        services: [
            {
                icon: <Calendar></Calendar>, // or activities icon
                text: "Group activities, games, and outings"
            },
            {
                icon: <PersonStanding></PersonStanding>, // or exercise icon
                text: "Light exercise, yoga, and wellness programs"
            },
            {
                icon: <BibleIcon></BibleIcon>, // or spiritual icon
                text: "Spiritual and religious services (if requested)"
            }
        ]
    },
    {
        mainIcon: <BrainIcon size={38}/>, // Specialized Care icon
        title: "Specialized Care",
        description: "Tailored care for specific needs and conditions",
        services: [
            {
                icon: <BookOpen></BookOpen>, // or memory care icon
                text: "Memory care for dementia and Alzheimer's"
            },
            {
                icon: <Clock></Clock>, // or respite icon
                text: "Short-term respite care for families"
            },
            {
                icon: <GraveIcon></GraveIcon>, // or hospice icon
                text: "End-of-life and hospice support"
            }
        ]
    },
    {
        mainIcon: <UserCheck size={38}/>, // Family Support icon
        title: "Family & Resident Support",
        description: "Creating a supportive community for residents and families",
        services: [
            {
                icon: <Notebook></Notebook>, // or care plan icon
                text: "Personalized care plans for each resident"
            },
            {
                icon: <MessageCircle></MessageCircle>, // or family updates icon
                text: "Regular family updates and involvement"
            },
            {
                icon: <House></House>, // or environment icon
                text: "Comfortable, home-like environment"
            }
        ]
    }
];