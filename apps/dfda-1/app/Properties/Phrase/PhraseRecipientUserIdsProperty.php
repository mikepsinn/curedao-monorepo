<?php
namespace App\Properties\Phrase;
use App\Models\Phrase;
use App\Traits\PropertyTraits\PhraseProperty;
use App\Properties\Base\BaseRecipientUserIdsProperty;
class PhraseRecipientUserIdsProperty extends BaseRecipientUserIdsProperty
{
    use PhraseProperty;
    public $table = Phrase::TABLE;
    public $parentClass = Phrase::class;
}