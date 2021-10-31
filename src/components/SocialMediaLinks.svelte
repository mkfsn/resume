<script>
    import IconLink from './IconLink.svelte';
    import Fa from 'svelte-fa';
    import { faHome } from '@fortawesome/free-solid-svg-icons';
    import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

    // TODO: load from yaml
    let sns = {
        home: 'https://mkfsn.github.io/',
        github: 'https://github.com/mkfsn',
        twitter: 'https://twitter.com/mkfsn',
        linkedin: 'https://linkedin.com/in/mkfsn',
    }
</script>

<IconLink link={sns.home}>
    <Fa icon={faHome} color="rgb(78,165,133)" size="lg" />
</IconLink>
<IconLink link={sns.github} >
    <Fa icon={faGithub} color="rgb(33,37,40)" size="lg" />
</IconLink>
<IconLink link={sns.twitter}>
    <Fa icon={faTwitter} color="rgb(43,152,236)" size="lg" />
</IconLink>
<IconLink link={sns.linkedin}>
    <Fa icon={faLinkedin} color="rgb(23,104,166)" size="lg" />
</IconLink>
