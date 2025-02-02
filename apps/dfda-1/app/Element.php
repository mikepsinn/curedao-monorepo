<?php

namespace App;

use Illuminate\Http\Request;
use JsonSerializable;
use App\Http\Requests\AstralRequest;

abstract class Element implements JsonSerializable
{
    use Metable;
    use AuthorizedToSee;
    use ProxiesCanSeeToGate;

    /**
     * The element's component.
     *
     * @var string
     */
    public $component;

    /**
     * Indicates if the element is only shown on the detail screen.
     *
     * @var bool
     */
    public $onlyOnDetail = false;

    /**
     * Create a new element.
     *
     * @param  string|null  $component
     * @return void
     */
    public function __construct($component = null)
    {
        $this->component = $component ?? $this->component;
    }

    /**
     * Create a new element.
     *
     * @return static
     */
    public static function make(...$arguments)
    {
        return new static(...$arguments);
    }

    /**
     * Determine if the element should be displayed for the given request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    public function authorize(Request $request)
    {
        return $this->authorizedToSee($request);
    }

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return $this->component;
    }

    /**
     * Specify that the element should only be shown on the detail view.
     *
     * @return $this
     */
    public function onlyOnDetail()
    {
        $this->onlyOnDetail = true;

        return $this;
    }

    /**
     * Prepare the element for JSON serialization.
     *
     * @return array
     */
    public function jsonSerialize(): mixed
    {
        return array_merge([
            'component' => $this->component(),
            'prefixComponent' => false,
            'onlyOnDetail' => $this->onlyOnDetail,
        ], $this->meta());
    }

    public function updateLink(){
        $request = resolve(AstralRequest::class);

        if (!$request->isCreateOrAttachRequest() &&
            !$request->isUpdateOrUpdateAttachedRequest() &&
            is_null($request->resourceId)) {
            $this->component = 'astral-update-link';
        }

        return $this;
    }
    public function detailLink(){
        $request = resolve(AstralRequest::class);

        if (!$request->isCreateOrAttachRequest() &&
            !$request->isUpdateOrUpdateAttachedRequest() &&
            is_null($request->resourceId)) {
            $this->component = 'astral-detail-link';
        }

        return $this;
    }
}
