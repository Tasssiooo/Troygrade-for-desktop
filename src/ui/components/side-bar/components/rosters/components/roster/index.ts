import { AccordionItem, AccordionRoot } from "radix-vue";
import RosterTrigger from "./components/roster-trigger/index.vue";
import RosterContent from "./components/roster-content/index.vue";

const RosterRoot = AccordionRoot;

const RosterItem = AccordionItem;

export { RosterRoot, RosterItem, RosterTrigger, RosterContent };
