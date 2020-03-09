import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, b as space, e as element, t as text, u as query_selector_all, k as detach_dev, h as claim_space, f as claim_element, g as children, j as claim_text, l as add_location, n as insert_dev, p as append_dev, z as noop } from './client.b6883820.js';

/* src/routes/about.svelte generated by Svelte v3.19.0 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;
	let br0;
	let br1;
	let t4;
	let br2;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("About MoodForFood");
			t2 = space();
			p = element("p");
			t3 = text("Welcome to MoodForFood.com, your go-to website to find your next meal. Whether it be breakfast, lunch, or dinner, MoodForFood can guide you \nin the perfect direction. Packaging all the metrics and numbers of a restaurant together, the site allows users to seamlessly select exactly what\nthey want according to their preferences.\n");
			br0 = element("br");
			br1 = element("br");
			t4 = text("\nAll you have to answer is one question: what are you in the mood for?\n");
			br2 = element("br");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "About MoodForFood");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "Welcome to MoodForFood.com, your go-to website to find your next meal. Whether it be breakfast, lunch, or dinner, MoodForFood can guide you \nin the perfect direction. Packaging all the metrics and numbers of a restaurant together, the site allows users to seamlessly select exactly what\nthey want according to their preferences.\n");
			br0 = claim_element(p_nodes, "BR", {});
			br1 = claim_element(p_nodes, "BR", {});
			t4 = claim_text(p_nodes, "\nAll you have to answer is one question: what are you in the mood for?\n");
			br2 = claim_element(p_nodes, "BR", {});
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 4, 0, 52);
			add_location(br0, file, 9, 0, 412);
			add_location(br1, file, 9, 4, 416);
			add_location(br2, file, 11, 0, 491);
			add_location(p, file, 6, 0, 80);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t3);
			append_dev(p, br0);
			append_dev(p, br1);
			append_dev(p, t4);
			append_dev(p, br2);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYjBjNzY4OTUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
